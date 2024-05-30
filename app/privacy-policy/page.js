import React from 'react'

export default function page() {
    const url = 'https://www.all-european-careers.com'
    const website = 'www.all-european-careers.com'
    const name = 'All European Careers'
    const address = 'C. De Manuel Galiana i Uriarte, 5, Bajo C, 03100, Alicante, Spain'
    const email = "dpo@all-european-careers.com"
    const date = "13/07/2021"

  return (
    <div className='flex justify-center'>
        <div className='lg:w-4/5 w-full py-10'>
            <div className='py-10'>
                  <h1 className='text-3xl text-center'>Privacy Policy</h1>
            </div>
            <div className='flex'>
                {/* <div className='w-1/4'>
                    <a href='#sample'>sample</a>
                </div> */}
                <div className='w-full'>
                    <div className='py-4 flex flex-col gap-3'>
                        <p>Welcome to {website}(the “Site”). This Privacy Policy (“Policy”) describes how {name}, or (“We”, “we”, “us”, “our” and “ours” or “{name}”) as referred below may use and disclose information that we may collect about you through the Site: <a href={url} className='text-primary'>{url}</a></p>
                        <p>{name} fully respects your right to privacy and we are committed to ensuring that your privacy is protected. Please read the following to learn more about how we collect, store, use and disclose information about you when you interact or use our website or services. For the purpose of the EU General Data Protection Regulation 2016/679 and the Data Protection Act 2018 (the “Act”), the data controller is {name} whose registered office is at {address}.</p>
                    </div>
                
                <div className='py-4 flex flex-col gap-3'>
                    <h6 className='text-2xl py-2 border-b'>What does this Privacy Policy cover?</h6>
                    <p>This Privacy Policy (the “Policy”) covers our treatment of your personal information that we gather when you are accessing or using our websites or services or when you contact us in any manner. We gather various types of information, including information that identifies you as an individual (“Personal Information”) as explained in more detail below.</p>
                </div>

                <div className='py-4 flex flex-col gap-3'>
                    <h6 className='text-2xl py-2 border-b'>What information do we collect?</h6>
                    <p>We receive and store information that you provide directly to us. For example, we collect Personal Information, such as name, age, contact details including email, postal address and telephone numbers, education details, employment history, and immigration status (and of course you may choose to share other relevant information with us).</p>
                    <p>Any information which you provide to us is not made available to any third parties without your permission and is used by {name} only in line with the purpose for which you provided it and in accordance with the Act.</p>
                </div>

                <div className='py-4 flex flex-col gap-3'>
                    <h6 className='text-2xl py-2 border-b'>How do we use the information?</h6>
                    <p>The information you provide to us is used by us to:</p>
                    <div className='ml-7'>
                    <ul class="list-disc space-y-2">
                        <li>provide our recruitment services to you, whether you are a client, candidate, or a user of our website;</li>
                            <li>enable you to submit your CV generally, to apply for specific jobs, or to subscribe to our Job Alerts;</li>
                            <li>provide information on suitable job opportunities to people who register with us, to match your profile with suitable job vacancies, and to assist us in finding a position that is most suitable for you including the evaluation of your data against vacancies which we may have that we determine may be suitable for you;</li>
                            <li>answer your inquiry;</li>
                            <li>provide other services related to or supplementary to the above; services directly to you to your professional or business email address; and</li>
                            <li>where we have a bona fide requirement by law to disclose it to third parties in relation to the detection of crime, the collection of taxes or duties, in order to comply with any applicable law and court order.</li>
                    </ul>
                    </div>
                    <p>This list is not exhaustive and we may seek to process, use or disclose your information for any other purpose which has not been listed above always with your explicit consent. The more information we have about you the more bespoke we can make our service.</p>
                    <p>Where appropriate, we will seek your consent to undertake some of these activities.</p>
                    <p>We may also use the information you send to us via the websites and/or services, to communicate with you via email and, possibly, other means, or to send you our newsletter, if this is in accordance with your marketing preferences. However, you will always be able to opt out of such communications at any time (see the “Your Rights” section below).</p>
                </div>

                      <div className='py-4 flex flex-col gap-3'>
                          <h6 className='text-2xl py-2 border-b'>How do we share your personal data?</h6>
                          <p>We do not share your personal information with anyone except as set out herein. Primarily we will share your information with prospective employers to increase your chances of securing a job. Within the scope of the purposes outlined above, we may outsource collected personal information to outside contractors/third parties. If we do so, we will take contractual measures to ensure that they process your data in a manner consistent with this Policy.</p>
                          <p>In the event of a sale, merger, receivership, or transfer of all assets of our company, we reserve the right to assign or share your personal information with such third parties and their advisers, you will be sent a notice of such an event, should it occur, with the ability to opt-out of such a transfer.</p>
                      </div>

                      <div className='py-4 flex flex-col gap-3'>
                          <h6 className='text-2xl py-2 border-b'>Is Personal Information about me secure?</h6>
                          <p>We use appropriate technical, organizational, and administrative security measures to protect any information we hold in our records from loss, misuse, and unauthorized access, disclosure, alteration, and destruction. While {name} takes all due care in ensuring the privacy and integrity of the information that you provide to us, we recognize that no data transmission over the internet can be 100% guaranteed as secure. The possibility exists that this information could be unlawfully observed by a third party while in transit over the internet. {name} accepts no liability should this occur.</p>
                      </div>

                      <div className='py-4 flex flex-col gap-3'>
                          <h6 className='text-2xl py-2 border-b'>How long will we use your personal data?</h6>
                          <p>We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
                          <p>To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data, and whether we can achieve those purposes through other means, and the applicable legal requirements. In general, your personal data will be retained for a period of five years from the date of your last contact with us.</p>
                          <p>In some circumstances you can ask us to delete your data: see Right to erasure below for further information. In some circumstances, we may anonymize your personal data (so that it can no longer be associated with you) for research or statistical purposes in which case we may use this information indefinitely without further notice to you.</p>
                          <p>While {name} takes all due care in ensuring the privacy and integrity of the information that you provide to us, we recognize that no data transmission over the internet can be 100% guaranteed as secure. The possibility exists that this information could be unlawfully observed by a third party while in transit over the internet. {name} accepts no liability should this occur.</p>
                      </div>

                      <div className='py-4 flex flex-col gap-3'>
                          <h6 className='text-2xl py-2 border-b'>Marketing Communications:</h6>
                          <p>If you have consented to receive certain marketing communications from us, you can opt-out of receiving such promotional or marketing communications from us at any time, by sending us an email to <a href={`mailto:${email} className='text-primary'`}>{email}</a>.</p>
                          <p>Your Rights: How can I update and access my information (Applicable for GDPR compliant Countries)</p>
                          <p>(Exercise my Data Subject Rights)?</p>
                          <p>Under the General Data Protection Regulation, you have the following rights:</p>
                          <p>Right to object: If we are using your data because we deem it necessary for our legitimate interests to do so, and you do not agree, you have the right to object. We will respond to your request within 30 days (although we may be allowed to extend this period in certain cases).</p>
                          <p>Right to withdraw consent: Where we have obtained your consent to process your personal data for certain activities (for example, assessing your suitability for certain roles), or consent to market to you, you may withdraw your consent at any time.</p>
                          <p>Right to rectification: if the personal data that we hold is inaccurate or incomplete, you have the right to request the rectification of your personal data.</p>
                          <p>Data Subject Access Requests: Just so it’s clear, you have the right to ask us to confirm what information we hold about you at any time, and to provide you with copies of that information. We will respond to your request within 30 days. At this point we may comply with your request or, additionally do one of the following:</p>
                          <div className='ml-7'>
                              <ul class="list-disc space-y-2">
                                  <li>we may ask you to verify your identity, or ask for more information about your request; and</li>
                                  <li>where we are legally permitted to do so, we may decline your request, but we will explain why if we do so.</li>
                              </ul>
                          </div>
                          <p>Right to erasure: In certain situations, (for example, where we have processed your data unlawfully), you have the right to request us to “erase” your personal data. We will respond to your request within 30 days (although we may be allowed to extend this period in certain cases) and will only disagree with you if certain limited conditions apply. If we do agree to your request, we will delete your data.</p>
                          <p>For any of the above requests, the below form needs to be completed and sent to <a href={`mailto:${email}`}>{email}</a> – Access Request Form.</p>
                          <p>Right to lodge a complaint with a supervisory authority: You also have the right to lodge a complaint with the Office of the Data Protection Commissioner.</p>
                          <p>The above list is not an exhaustive list of your rights, further information can be found at <a href='https://ec.europa.eu/info/law/law-topic/data-protection_en' target='_blank' className='text-primary'>https://ec.europa.eu/info/law/law-topic/data-protection_en</a></p>
                      </div>

                      <div id="sample" className='py-4 flex flex-col gap-3'>
                          <h6 className='text-2xl py-2 border-b'>Will {name} ever change this Privacy Policy?</h6>
                          <p>We may need to change this Privacy Statement from time to time. We will alert you to material changes by, for example, placing a notice on our websites and/or by sending you an email (if you have registered your e-mail details with us) when we are required to do so by applicable law. You are responsible for periodically reviewing this Privacy Statement.</p>
                          <p>This Privacy Statement was most recently updated on {date}.</p>
                      </div>

                      <div className='py-4 flex flex-col gap-3'>
                          <h6 className='text-2xl py-2 border-b'>What if I have questions about this Policy?</h6>
                          <p>
                              If you have any questions or concerns regarding our privacy policies, please send us a detailed message <a href={`mailto:${email}` } className='text-primary'>{email}</a> and we will try to resolve your concerns.</p>
                      </div>

                </div>
            </div>

        </div>

    </div>
  )
}
