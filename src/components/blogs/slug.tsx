import Container from '@/layouts/container'
import { MockData } from '@/types'
import BlogHero from './blog/BlogHero'
import BlogContent from './blog/BlogContent'
import TOC from './blog/TOC'
import Nutshell from './blog/Nutshell'
import TopBlogs from './blog/TopBlogs'

export default function PostView({ blog, popular } : {
    blog: MockData | undefined
    popular: MockData[]
}) {
  return (
    <Container>
      <div className="flex">
        <div>
          <BlogHero blog={blog} />
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-5">
            <div className="col-span-2">
              <BlogContent body={blog?.body} />
            </div>
            <div className="relative">
              <TOC slug={blog?.slug} />
            </div>
          </div>
          <Nutshell faqQuestions={blog?.faq} />
          {/* <NewsLetter /> */}
          <TopBlogs topBlogs={popular} />

          {/* <Nutshell faqQuestions={props.blog.bloqFaq} />
          <NewsLetter />
          <TopBlogs topBlogs={props.popular} /> */}
        </div>
      </div>
    </Container>
  )
}
