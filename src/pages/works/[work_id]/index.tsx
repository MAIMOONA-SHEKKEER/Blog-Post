import React, { useEffect, useState } from "react";
import { Work } from "@/models/work";
import { useRouter } from "next/router";
import {
  GreyOutSpan,
  Headline,
  StyledPara,
} from "@/styled-components/Typography";
import { CenteredContainer, StyledDiv } from "@/styled-components/Box";
import { StyledImgLarge } from "@/styled-components/Image";
import { SecondaryYearButton } from "@/styled-components/Button";
import LoadingData from "@/components/LoadingData";

const WorkDetail = () => {
  const [workPost, setWorkPost] = useState<Work | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { work_id } = router.query;

  useEffect(() => {
    const fetchWorkPost = async () => {
      if (!work_id) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("/data/workPost.json");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Work[] = await res.json();
        const post = data.find((post) => post.id === Number(work_id));
        if (!post) {
          throw new Error("Work post not found");
        }
        setWorkPost(post);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkPost();
  }, [work_id]);

  if (loading) {
    return <LoadingData/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CenteredContainer>
      <div>
        <Headline>{workPost?.title}</Headline>
        <SecondaryYearButton>{workPost?.year}</SecondaryYearButton>
        <GreyOutSpan>{workPost?.shortNote}</GreyOutSpan>
        <StyledPara>{workPost?.description}</StyledPara>
      </div>
      <StyledImgLarge src={workPost?.thumbnail} alt="Thumbnail Picture" />
    </CenteredContainer>
  );
};

export default WorkDetail;
