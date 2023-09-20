import React from "react";
import MyImg from "../../Images/issues.png";
import {
  BlogContainer,
  BlogList,
  BlogTitle,
  BlogItems,
  ListContainer,
  BlogText,
  Link,
} from "./Blog.styled";

function Blog() {
  return (
    <BlogContainer>
      <BlogTitle>Issues</BlogTitle>
      <BlogText>
        Here you can find information that may be useful for you
      </BlogText>
      <ListContainer>
        <BlogList>
          <BlogItems>
            <Link href="#">Anorexia</Link>
          </BlogItems>
          <BlogItems>
            <Link href="#">Anxity</Link>
          </BlogItems>
          <BlogItems>
            <Link href="#">Attention Deficit Hyperactivity Disorder</Link>
          </BlogItems>
          <BlogItems>
            <Link href="#">Bereavement</Link>
          </BlogItems>
          <BlogItems>
            <Link href="#">Bipolar Disorder</Link>
          </BlogItems>
        </BlogList>
        <div>
          <img src={MyImg} alt="" />
        </div>
        <BlogList>
          <BlogItems>
            <Link href="#">Health Anxiety</Link>
          </BlogItems>
          <BlogItems>
            <Link href="#">Panic Disorder</Link>
          </BlogItems>
          <BlogItems>
            <Link href="#">Self Harm</Link>
          </BlogItems>
          <BlogItems>
            <Link href="#">Sleep Disorders</Link>
          </BlogItems>
          <BlogItems>
            <Link href="#">Eating Disorders</Link>
          </BlogItems>
        </BlogList>
      </ListContainer>
    </BlogContainer>
  );
}

export default Blog;
