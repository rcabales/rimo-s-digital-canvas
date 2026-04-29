import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
  inlineImage?: string;
  inlineImageAlt?: string;
}

/**
 * Renders markdown content with GitHub-flavored markdown support.
 * Optionally injects an inline image after the first paragraph.
 */
const MarkdownContent = ({ content, inlineImage, inlineImageAlt = "" }: MarkdownContentProps) => {
  let injected = false;

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ node, children, ...props }) => {
          const paragraph = (
            <p {...props}>{children}</p>
          );
          if (!injected && inlineImage) {
            injected = true;
            return (
              <>
                {paragraph}
                <figure className="not-prose my-8">
                  <img
                    src={inlineImage}
                    alt={inlineImageAlt}
                    loading="lazy"
                    width={1280}
                    height={640}
                    className="w-full rounded-2xl border border-border"
                  />
                </figure>
              </>
            );
          }
          return paragraph;
        },
        a: ({ node, ...props }) => (
          <a {...props} className="text-primary underline underline-offset-2 hover:no-underline" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
