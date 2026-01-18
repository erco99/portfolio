import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "mdx-components";
import remarkGfm from 'remark-gfm';

type Props = {
  content: string;
};

export default function MDXContent({ content }: Props) {
  const components = useMDXComponents({});

  return (
    <div>
      <MDXRemote source={content} components={components} options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}/>
    </div>
  );
}
