import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleXmark
} from '@fortawesome/free-regular-svg-icons'

import { InlineWidget } from "react-calendly";


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

	<section className="py-20 bg-black">
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center">
				<div>
					<h1 className="text-[#dcdcdc]">we help eCommerce & info product businesses <u>generate</u> sales via paid advertising.</h1>
					<a href="#book-a-demo" className="btn">Book your free strategy call</a>
				</div>

				{/* <div>
					<StaticImage
						src="../images/gatsby-astronaut.png"
						width={300}
						quality={95}
						formats={["auto", "webp", "avif"]}
						alt="A Gatsby astronaut"
						style={{ marginBottom: `1.45rem` }}
					/>
				</div> */}
			</div>
		</div>
	</section>

	<section className="py-12 bg-[#fbfbfd]">
		<div className="container mx-auto px-4">
			<div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
				<div>
					<h2>ads, just ads.</h2>
					<p>We do one thing - we just do it with a monastic focus and better than anyone else. If you want an agency that offers a full service solution of everything that won’t move the needle forward, we’re not for you.</p>
					<p>If you want an agency where with two clicks, you can get a clear breakdown of how much was spent, how much was made & what your net profit was - we’re for you.</p>

					{/* <a href="#" className="btn">Book your free strategy call</a> */}
				</div>
				<div>
					<h2>we don't offer any other services except for paid advertising...</h2>
					<ul className="m-0">
						<li><FontAwesomeIcon icon={faCircleXmark} size="1x" className="text-[#3bb4c1]" /> WEB DESIGN/DEVELOPMENT</li>
						<li><FontAwesomeIcon icon={faCircleXmark} size="1x" className="text-[#3bb4c1]" /> ​CONTENT CREATION</li>
						<li><FontAwesomeIcon icon={faCircleXmark} size="1x" className="text-[#3bb4c1]" /> EMAIL MARKETING</li>
						<li><FontAwesomeIcon icon={faCircleXmark} size="1x" className="text-[#3bb4c1]" /> ​SOCIAL MEDIA MANAGEMENT</li>
						<li><FontAwesomeIcon icon={faCircleXmark} size="1x" className="text-[#3bb4c1]" /> INSTAGRAM GROWTH</li>
						<li><FontAwesomeIcon icon={faCircleXmark} size="1x" className="text-[#3bb4c1]" /> PR SERVICE</li>
					</ul>
				</div>
				<div>
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget sagittis ligula. Donec mi dui, auctor ac commodo ut, facilisis ut tortor. Duis egestas arcu a enim cursus egestas. Vestibulum velit ante, rhoncus vel fringilla nec, posuere id tellus. Nullam imperdiet condimentum semper.</p> <p>Phasellus facilisis sem sed libero tempor pretium. Etiam pulvinar cursus massa vel faucibus. Curabitur bibendum viverra placerat. Nullam bibendum quam leo, quis lacinia odio elementum ut. Vivamus ut efficitur enim. Vestibulum tincidunt arcu nunc, a facilisis arcu vulputate sit amet.</p>
				</div>
				<div>
					<h2>book your free strategy call</h2>
					<InlineWidget url="https://calendly.com/digenerate" />
				</div>
			</div>
		</div>
	</section>

	{/* <section className="py-12" id="book-a-demo">
		<div className="container mx-auto px-4">
			<h2 className="text-center">Book your free strategy call</h2>
				<div className="max-w-lg mx-auto">
					<InlineWidget url="https://calendly.com/digenerate" />
				</div>
			
		</div>
	</section> */}

	<section className="py-16 bg-[#2a2a2a]">
		<div className="container mx-auto px-4">
			<div className="max-w-lg mx-auto text-center text-[#dcdcdc]">
				<h2>have a general enquiry?</h2>
				<p>If you have a general enquiry and would like to speak to our expert team, you can contact us via email at: hello@digenerate.com</p>
				<a href="#" className="btn">Book your free strategy call</a>
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
