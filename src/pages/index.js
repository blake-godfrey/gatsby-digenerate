import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleXmark,
	faCircleCheck
} from '@fortawesome/free-regular-svg-icons'

import { InlineWidget } from "react-calendly";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

	<section className="py-20 bg-black">
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center">
				<div>
					<h1 className="text-white">We help businesses <span className="text-[#3bb4c1]">generate</span> sales & leads via paid advertising.</h1>
					<a href="#book-a-demo" className="btn">Book your free strategy call</a>
				</div>

				<div>
					<StaticImage
						src="../images/hero.webp"
						width={300}
						quality={95}
						formats={["auto", "webp", "avif"]}
						alt="A Gatsby astronaut"
						style={{ marginBottom: `1.45rem` }}
					/>
				</div>
			</div>
		</div>
	</section>

	<section className="py-20">
		<div className="container mx-auto px-4">
			<div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
				<div>
					<h2>What we offer</h2>
					<h3>Paid advertising</h3>
					<p>If you want an agency that offers a full service solution of everything that won’t move the needle forward, we’re not for you.</p>
					<p>If you want an agency where with two clicks, you can get a clear breakdown of how much was spent, how much was made & what your net profit was - we’re for you.</p>
					<a href="#book-a-demo" className="btn">Book your free strategy call</a>
				</div>
				<div>
					<h2>We don't offer any other services except for paid advertising...</h2>
					<ul className="m-0">
						<li><FontAwesomeIcon icon={faCircleXmark} size="1x" className="text-[#3bb4c1] mr-1" /> WEB DESIGN/DEVELOPMENT</li>
						<li><FontAwesomeIcon icon={faCircleXmark} size="1x" className="text-[#3bb4c1] mr-1" /> ​CONTENT CREATION</li>
						<li><FontAwesomeIcon icon={faCircleXmark} size="1x" className="text-[#3bb4c1] mr-1" /> EMAIL MARKETING</li>
						<li><FontAwesomeIcon icon={faCircleXmark} size="1x" className="text-[#3bb4c1] mr-1" /> ​SOCIAL MEDIA MANAGEMENT</li>
						<li><FontAwesomeIcon icon={faCircleXmark} size="1x" className="text-[#3bb4c1] mr-1" /> INSTAGRAM GROWTH</li>
						<li><FontAwesomeIcon icon={faCircleXmark} size="1x" className="text-[#3bb4c1] mr-1" /> PR SERVICE</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section className="py-20 bg-[#fbfbfd]" id="book-a-demo">
		<div className="container mx-auto px-4">
			<div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
				<div>
					<InlineWidget url="https://calendly.com/digenerate/15min" />
				</div>

				<div>
					<h2>Book in your free 15 minute demo call</h2>
					<p>By the end of this Audit call, you will have a clear understanding of the next steps you can take for your business to start generating consistent and reliable results online with Funnels & Paid Advertising.</p>
					<p>Find a time on Blake’s calendar to schedule your call today and we look forward to speaking to you soon!</p>

					<h3>This audit call is perfect for:</h3>
					<ul className="m-0">
						<li className="flex"><FontAwesomeIcon icon={faCircleCheck} size="1x" className="text-[#3bb4c1] mt-1 mr-2" /> Businesses looking to convert their current website into a high quality & streamlined funnel format</li>
						<li className="flex"><FontAwesomeIcon icon={faCircleCheck} size="1x" className="text-[#3bb4c1] mt-1 mr-2" /> ​Businesses looking to take their offline business online</li>
						<li className="flex"><FontAwesomeIcon icon={faCircleCheck} size="1x" className="text-[#3bb4c1] mt-1 mr-2" /> Businesses looking to understand their increased revenue potential with funnels & conversion rate optimization</li>
						<li className="flex"><FontAwesomeIcon icon={faCircleCheck} size="1x" className="text-[#3bb4c1] mt-1 mr-2" /> ​Businesses looking to maximize their conversion rates & average order value</li>
						<li className="flex"><FontAwesomeIcon icon={faCircleCheck} size="1x" className="text-[#3bb4c1] mt-1 mr-2" /> Businesses looking for a reliable agency that can make their company a priority</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section className="py-20">
		<div className="container mx-auto px-4">
			<
		</div>
	</section>

	<section className="py-20 bg-[#2a2a2a]">
		<div className="container mx-auto px-4">
			<div className="max-w-lg mx-auto text-center text-white">
				<h2>Have a general enquiry?</h2>
				<p>If you have a general enquiry and would like to speak to our expert team, you can contact us via email at: <a className="text-[#3bb4c1] hover:text-[#2f909a]" href='mailto:hello@digenerate.com'>hello@digenerate.com</a></p>
				<a href="#book-a-demo" className="btn">Book your free strategy call</a>
			</div>
		</div>
	</section>

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
