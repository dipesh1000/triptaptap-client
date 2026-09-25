export const PRIVACY_EFFECTIVE_DATE = '21 September 2026'

export type PrivacySection = {
  id: string
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export const PRIVACY_INTRO =
  'This Privacy Policy explains how TripTaptap (“TripTaptap”, “Trip Taptap”, “we”, “us”, or “our”) collects, uses, shares, and protects personal information when you use our website, mobile applications, and related services (together, the “Services”). Please read it carefully. By creating an account, making a booking, or otherwise using the Services, you acknowledge this Policy.'

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: 'who-we-are',
    heading: '1. Who we are',
    paragraphs: [
      'TripTaptap is a travel marketplace that helps travellers discover and book tours, trips, and local experiences offered by independent operators and vendors. We also provide tools for operators to list experiences, manage bookings, and communicate with travellers.',
      'For questions about this Policy or our handling of personal information, contact us at Info@triptaptap.com.',
    ],
  },
  {
    id: 'scope',
    heading: '2. Scope',
    paragraphs: [
      'This Policy applies to personal information processed through triptaptap.com, the Trip Taptap iOS and Android apps, operator/admin tools, emails and in-app messages we send, and customer support. It does not apply to third-party websites, payment apps, maps, or operator-owned systems that we do not control. Those parties have their own privacy practices.',
    ],
  },
  {
    id: 'collect',
    heading: '3. Information we collect',
    paragraphs: [
      'We collect information you provide, information generated when you use the Services, and information from partners who help us operate the platform.',
    ],
    bullets: [
      'Account and identity: name, email address, phone number, password or authentication tokens, profile photo, date of birth if provided, and account role (traveller, vendor/operator, or admin).',
      'Sign-in providers: if you use Google or Apple to sign in, we receive identifiers and basic profile details those providers share with us (such as name and email, including Apple Hide My Email relay addresses).',
      'Booking and travel details: package or experience selected, travel date, number of travellers, traveller names and ages where required, emergency contact, special requests, itinerary notes, and booking status.',
      'Payments: amount, currency, payment method type, transaction identifiers, and payment status. Card, wallet, and bank credentials are processed by payment partners (currently including Khalti, and other processors we may enable such as eSewa or Stripe). We do not store full payment-card numbers on TripTaptap servers.',
      'Communications: support requests, in-app chat or booking messages, reviews, ratings, and feedback you submit.',
      'Operator content: listings, itineraries, photos, location pins for experiences, business details, payout-related information, and documents operators upload to run their listings.',
      'Device and usage: device type, operating system, app version, language, approximate network information, crash and diagnostic logs, pages or screens viewed, search queries, saved items, and similar analytics needed to run and improve the Services.',
      'Location: when you grant permission, we collect location while the app is in use to show nearby destinations and to help operators set listing locations. You can refuse or later disable location access in device settings; some features may then work with reduced accuracy.',
      'Camera and photos: when you grant permission, we access the camera or photo library so you can take or upload a profile photo or listing images. We do not access your camera or library in the background.',
      'Cookies and similar technologies on the website: we may use essential cookies for security and session operation, and limited analytics cookies to understand site performance. You can control cookies through your browser settings.',
    ],
  },
  {
    id: 'use',
    heading: '4. How we use information',
    paragraphs: ['We use personal information to:'],
    bullets: [
      'Create and manage accounts, authenticate users, and keep the Services secure.',
      'Process bookings, confirmations, itineraries, cancellations, refunds, invoices, and receipts.',
      'Share the minimum necessary booking details with the relevant operator so they can deliver the experience.',
      'Process payments through payment partners and detect fraud, chargebacks, or abuse.',
      'Send transactional messages (booking updates, payment results, security alerts) and, where permitted, product news or offers. You may opt out of marketing at any time.',
      'Personalize search, recommendations, and saved trips.',
      'Provide customer support and resolve disputes between travellers and operators.',
      'Improve reliability, diagnose crashes, measure performance, and develop new features.',
      'Comply with law, tax, accounting, safety, and regulatory obligations, and enforce our terms.',
    ],
  },
  {
    id: 'legal-bases',
    heading: '5. Legal bases (where applicable)',
    paragraphs: [
      'Depending on your location, we process information because it is necessary to perform a contract with you (for example, completing a booking), because we have a legitimate interest in operating a safe marketplace, because we must comply with a legal obligation, or because you have given consent (for example, optional location, camera, marketing, or cookies that are not strictly necessary). You may withdraw consent at any time without affecting processing that already occurred.',
    ],
  },
  {
    id: 'share',
    heading: '6. When we share information',
    paragraphs: [
      'We do not sell your personal information. We share it only as needed to operate the Services or as required by law:',
    ],
    bullets: [
      'Operators and vendors: name, contact details, traveller counts, booking notes, and other details required to fulfil the experience you booked.',
      'Payment partners: transaction data needed to authorize, capture, refund, or investigate a payment.',
      'Service providers: hosting, cloud storage, email delivery, analytics, customer support, maps, identity (Google/Apple), and similar vendors bound to use data only to provide services to us.',
      'Legal and safety: when we reasonably believe disclosure is required by law, court order, or to protect travellers, operators, TripTaptap, or the public from fraud, harm, or abuse.',
      'Business transfers: if we merge, reorganize, or sell assets, personal information may transfer to the successor, subject to this Policy or equivalent protections.',
    ],
  },
  {
    id: 'international',
    heading: '7. International transfers',
    paragraphs: [
      'TripTaptap is operated from Nepal and may be used by travellers and operators in other countries. Information may be processed on servers or by vendors located outside your country. We take steps appropriate to the context (contractual, technical, and organizational) to protect information during such transfers.',
    ],
  },
  {
    id: 'retention',
    heading: '8. Retention',
    paragraphs: [
      'We keep personal information only as long as needed for the purposes described in this Policy, including to complete bookings, provide support, meet tax and legal record-keeping duties, resolve disputes, and prevent fraud. When information is no longer required, we delete or de-identify it, unless a longer period is required or permitted by law. Backup copies may persist for a limited time until overwritten.',
    ],
  },
  {
    id: 'security',
    heading: '9. Security',
    paragraphs: [
      'We use reasonable administrative, technical, and physical safeguards, including encrypted transport (HTTPS/TLS), access controls, and least-privilege practices for staff and systems. No method of transmission or storage is completely secure. You are responsible for keeping your password and device credentials confidential and for notifying us promptly of suspected unauthorized access.',
    ],
  },
  {
    id: 'rights',
    heading: '10. Your choices and rights',
    paragraphs: [
      'Subject to applicable law, you may have the right to access, correct, update, delete, or export your personal information, to object to or restrict certain processing, and to withdraw consent. You can review much of your profile information in the app. To exercise other rights, email Info@triptaptap.com. We may need to verify your identity before fulfilling a request, and we may decline requests that are unlawful, excessive, or would interfere with others’ rights or our legal obligations.',
      'You can also control push notifications, location, camera, and photo access in your device settings; unsubscribe from marketing emails using the link in those messages; and delete your account by contacting support where in-app deletion is not available.',
    ],
  },
  {
    id: 'children',
    heading: '11. Children',
    paragraphs: [
      'The Services are not directed to children under 13 (or the equivalent minimum age in your country). We do not knowingly collect personal information from children below that age except as traveller details a parent or guardian provides for a booking. If you believe we have collected information from a child in error, contact Info@triptaptap.com and we will take appropriate steps to delete it.',
    ],
  },
  {
    id: 'operators',
    heading: '12. Independent operators',
    paragraphs: [
      'Experiences are delivered by independent operators. When an operator receives your booking details, they act as a separate organization for that fulfilment. TripTaptap is not responsible for an operator’s independent privacy practices outside the platform. Review listing details and operator communications before you travel.',
    ],
  },
  {
    id: 'changes',
    heading: '13. Changes to this Policy',
    paragraphs: [
      'We may update this Policy to reflect product, legal, or operational changes. The “Effective date” at the top of this page will change when we do. Material changes will be announced through the Services or by email where appropriate. Continued use after an update means the revised Policy applies to you.',
    ],
  },
  {
    id: 'contact',
    heading: '14. Contact',
    paragraphs: [
      'Controller: TRIP TAPTAP PVT LTD, 3, Changunarayan Municipality, Bagmati, Nepal.',
      'Privacy requests, questions, and complaints: Info@triptaptap.com',
      'Phone: +977 9863542297',
      'Website: https://www.triptaptap.com',
      'If you are unsatisfied with our response, you may have the right to contact a data-protection or consumer authority in your country.',
    ],
  },
]
