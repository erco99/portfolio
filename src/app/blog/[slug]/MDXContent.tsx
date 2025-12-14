import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "mdx-components";

type Props = {
  content: string;
};

export default function MDXContent({ content }: Props) {
  const components = useMDXComponents({});

  return (
    <div>
      <MDXRemote source={content} components={components} />
    </div>
  );
}
