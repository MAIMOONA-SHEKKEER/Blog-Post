import Link from "next/link";
import React, { useEffect, useState } from "react";
import LoadingData from "@/components/LoadingData";
import { Work } from "@/models/work";
import {
  CenteredContainer,
  ContainerDiv,
  StyledDiv,
} from "@/styled-components/Box";
import { PrimaryYearButton } from "@/styled-components/Button";
import { StyledImgSmall } from "@/styled-components/Image";
import {
  GreyOutSpan,
  Headline,
  StyledPara,
  Title,
} from "@/styled-components/Typography";
import Modal from "@/styled-components/Modal";
import Image from "next/image";
import SearchBox from "@/components/SearchBox";

export const WorksComponent = () => {
  const [workPosts, setWorkPosts] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string >('');
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchWorkPosts = async () => {
      try {
        const res = await fetch("/data/workPost.json");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Work[] = await res.json();
        setWorkPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkPosts().catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  if (loading) {
    return <LoadingData />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredWorkPosts = workPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <CenteredContainer>
      <Headline>Work</Headline>
      <SearchBox setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      {filteredWorkPosts.map((post) => (
        <Link href={`/works/${post.id}`} key={post.id}>
          <StyledDiv>
            <ContainerDiv>
              <StyledImgSmall
                src={post.thumbnail}
                alt="Thumbnail Picture"
                onClick={(e) => {
                  e.preventDefault();
                  openModal(post.thumbnail);
                }}
              />
              <div>
                <Title>{post.title}</Title>
                <br />
                <PrimaryYearButton>{post.year}</PrimaryYearButton> |
                <GreyOutSpan>{post.shortNote}</GreyOutSpan>
                <StyledPara>{post.shortDesc}</StyledPara>
              </div>
            </ContainerDiv>
          </StyledDiv>
        </Link>
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Image src={modalImage} alt="Modal Thumbnail" width={246} height={150}/>
      </Modal>
    </CenteredContainer>
  );
};

export default WorksComponent;
