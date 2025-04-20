import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'
import { cities } from '~/data/cities'
import { Input } from './ui/Input'
import { Button } from './ui/Button'

type FooterLinkGroup = {
  title: String
  links: { text: String; href: string }[]
}

const links: FooterLinkGroup[] = [
  {
    title: 'Company',
    links: [
      { text: 'About us', href: '#' },
      { text: 'Team', href: '#' },
      { text: 'Careers', href: '#' },
      { text: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { text: 'Help & Support', href: '#' },
      { text: 'Partner with us', href: '#' },
      { text: 'Ride with us', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Terms & Conditions', href: '#' },
      { text: 'Refund & Cancellation', href: '#' },
      { text: 'Privacy Policy', href: '#' },
      { text: 'Cookie Policy', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <div className="bg-[#212121] text-gray-100">
      <div className="contain py-20">
        <div className="border-b border-[#424242]">
          <h6 className="text-headline-6 mb-10 font-bold"> Our top cities</h6>
          <div className="grid grid-cols-5 gap-2 pb-24 font-light">
            {cities.map((city, index) => (
              <span key={index}>{city}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-between border-b border-[#424242] py-16">
          <div className="flex flex-1 gap-28">
            {links.map(({ title, links }, index) => (
              <div key={index}>
                <h6 className="text-headline-6 mb-10 font-bold">{title}</h6>
                <ul className="list-none font-light">
                  {links.map(({ text, href }, index) => (
                    <li key={index} className="not-last:mb-2">
                      <Link to={href}>{text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-10 text-[#f5f5f5]">
            <h6 className="font-bold">FOLLOW US</h6>
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
            <p className="font-bold">
              Receive exclusive offers in your mailbox
            </p>
            <div className="flex items-stretch gap-4">
              <div className="flex items-center rounded-md bg-[#424242] px-4 py-2.5 text-[#adadad]">
                <FontAwesomeIcon icon={faEnvelope} />
                <Input
                  type="email"
                  name="email"
                  className="w-72 border-0 px-4 py-2 text-gray-100 placeholder:text-gray-400 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <Button
                size={'contain'}
                className="group gradient-bg px-7 font-bold"
              >
                <span className="transition-all duration-300 ease-in-out group-hover:scale-110">
                  Subscribe
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <p>All rights reserved.</p>
            <FontAwesomeIcon icon={faCopyright} size="2xs" />
            <b>Francis Oke, 2025</b>
          </div>
          <div>
            Designed by{' '}
            <a
              href="https://www.figma.com/@themewagon"
              target="_blank"
              className="font-bold"
            >
              ThemeWagon
            </a>
            , Implemented by{' '}
            <a
              href="http://www.linkedin.com/in/francis-oke"
              className="font-bold"
            >
              Francis Oke
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
