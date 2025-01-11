import React from 'react'
import {Title} from '../components/Title'
import { assets } from '../assets/assets'
import {NewsletterBox} from '../components/NewsletterBox'

function About() {

  return (
    <div>
<div className='text-2xl text-center pt-8 border-t'>
<Title text1={'ABOUT'} text2={'US'}/>
</div>
<div className='my-10 flex flex-col md:flex-row gap-16'>
<img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p>Welcome to Enhance Clothing, where style meets individuality. We believe that fashion is more than just clothing—it's a way to express your personality, confidence, and creativity. Our mission is to provide high-quality, trendy, and versatile pieces that cater to all styles and occasions. From timeless classics to bold, statement-making designs, we aim to enhance your wardrobe with thoughtfully curated collections that reflect the latest trends and your unique identity.</p>
<p>At Enhance Clothing, every piece is crafted with attention to detail, using premium materials to ensure comfort and durability. Whether you're dressing for work, a special event, or everyday wear, our goal is to inspire you to look and feel your best.
Thank you for choosing Enhance Clothing as your go-to destination for fashion that empowers and celebrates individuality. Let us help you enhance your style, one outfit at a time.</p>
<b className='text-gray-800'>OUR MISSION</b>
<p>At Enhance Clothing, our mission is to empower individuals through fashion by offering high-quality, stylish, and versatile clothing that celebrates uniqueness. We aim to inspire confidence and self-expression while prioritizing inclusivity, sustainability, and customer satisfaction.</p>
</div>
</div>
<div className='text-xl py-4'>
<Title text1={'WHY'} text2={'CHOOSE US'}/>
</div>
<div className='flex flex-col md:flex-row text-sm mb-20'>
<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
  <b>Quality Assurance :</b>
  <p className='text-gray-600'>At Enhance Clothing, quality is our priority. Every piece is crafted with care using premium materials and meticulous attention to detail. We ensure our products meet the highest standards of durability, comfort, and style, so you can shop with confidence.</p>
</div>

<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
  <b>Convenience :</b>
  <p className='text-gray-600'>We value your time and strive to make your shopping experience as seamless as possible. From an easy-to-navigate website to secure payment options and swift delivery, every step is designed with your convenience in mind. Enjoy effortless fashion, anytime, anywhere.</p>
</div>

<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
  <b>Exceptional Customer Services :</b>
  <p className='text-gray-600'>Your satisfaction is at the heart of everything we do. Our dedicated customer support team is always ready to assist with any queries, returns, or concerns. We are committed to providing a friendly, responsive, and hassle-free experience to ensure your trust and loyalty.</p>
</div>
</div>

<NewsletterBox/>
    </div>
  )
}

export default About