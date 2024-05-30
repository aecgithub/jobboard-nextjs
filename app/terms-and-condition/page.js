import React from 'react'

export default function page() {
    const url = 'https://www.all-european-careers.com'
    const website = 'www.all-european-careers.com'
    const name = 'All European Careers'
    const address = 'De Vrièrestraat 54 - 201B-2000 Belgium'
    const email = "dpo@all-european-careers.com"
    const date = "13/07/2021"

    return (
        <div className='flex justify-center'>
            <div className='lg:w-4/5 w-full py-10'>
                <div className='py-10'>
                    <h1 className='text-3xl text-center'>Terms & Conditions</h1>
                </div>
                <div className='flex'>
                    {/* <div className='w-1/4'>
                    <a href='#sample'>sample</a>
                </div> */}
                    <div className='w-full'>

                        <div className='py-4 flex flex-col gap-3'>
                            <h6 className='text-2xl py-2 border-b'>Marketing Communications:</h6>
                            <p>Welcome to {name} Website Terms & Conditions These Terms and Conditions (“T&C”) govern your use of {name}’s website at <a href={url} className='text-primary'>{url}</a> (“{name}”) and your relationship with {name} (“{name}”, “we”, “us”, “our” or “ours”). Please read these carefully since they affect your rights and liabilities under the applicable law. Should you not agree to these T&C, please do not use the {name} Site. For any questions on the T&C, please contact <a href={`mailto:${email}`} className='text-primary'>{email}</a></p>
                            <p>Where {name} introduces any candidate for a temporary assignment or employment with our customers via phone, postal mail, or e-mail, the necessary introductions are subject to our standard T&C, business terms, and general best practices as applicable. {name} will sign with our customers our standard agreement applicable to them at the point of registration or following registration. These T&C are not a replacement, but an addition to our standard business terms.</p>
                        </div>

                        <div className='py-4 flex flex-col gap-3'>
                            <h6 className='text-2xl py-2 border-b'>Your use of {name}’s website</h6>
                            <p>We operate the {name} Site to help you in understanding our services and as a communication channel.</p>
                            <p>The {name} Site is provided for your personal use subject to these T&C. By accessing or using the {name} Site, you agree to be bound by these T&C.</p>
                            <p>You will find access to most of our website areas without having to register any of your details with us however few website areas are only open to you upon registration, you shall be deemed to have granted a full acceptance of these T&C. If you do not accept these T&C in full, please do leave this website.</p>
                            <p>You shall not use our Site for any of the following purposes:</p>
                            
                            <div className='ml-7'>
                                <ul class="list-disc space-y-2">
                                    <li>Posting or transmitting material that encourages conduct that constitutes a criminal offence, results in civil liability or otherwise breaches any applicable laws, regulations, or code of practice;</li>
                                    <li>Posting or transmitting on the Site inaccurate, incomplete, or false information (including if you are a candidate, biographical information about yourself, and/or information about your ability to work in the European Union or elsewhere)</li>
                                    <li>Interfering with any other person’s use or enjoyment of the {name} Site</li>
                                    <li>Posting or transmitting any material for which you have not obtained all necessary licenses and/or approvals</li>
                                    <li>Posting or transmitting on the Site any libelous, unlawful, threatening, harmful, harassing, abusive, vulgar, obscene or otherwise objectionable material or otherwise breaching any laws;</li>
                                    <li>Posting or transmitting on the Site anti-virus, trojans, or similar disabling devices which interferes or may interfere with the operation of the Site or threatens its security or those of the Users of the {name} Site</li>
                                    <li>To post, transmit, alter or delete any information to which you have no authority to alter or delete; and/or overloads the Site by spamming or flooding it (DDoS)</li>
                                    <li>Do anything that affects {name}’s reputation or defame, harass, or threatening others</li>
                                </ul>
                            </div>

                            <p>You will be responsible for our losses and costs resulting from your breach of this clause.</p>
                            <p>{name} in its sole discretion shall determine your compliance with the above and shall have the right to prevent you from using the Site and deleting without any notice, any material that {name} deems not compliant with our T&C.</p>
                            <p>{name} shall co-operate fully with any law enforcement authorities or court order requesting or directing {name} to disclose the identity or locate anyone posting any material in breach of the above.</p>
                            <p>As the services on the Site are made available to users and employers immediately, you do not enjoy any cancellation rights in relation to these T&C.</p>
                            <p>By submitting information through the Site, you acknowledge that while we may contact you in response to the information you provide, we are not obliged to provide you with any particular service or products.</p>
                        </div>

                        <div className='py-4 flex flex-col gap-3'>
                            <h6 className='text-2xl py-2 border-b'>Security and passwords</h6>
                            <p>When you visit our Site or register within it, you may need to use a user name and password. You are solely responsible for the security and proper use of the password, and for keeping it confidential at all times and not disclosing it to anyone. We accept no liability for any unauthorized or improper use or disclosure of any password therefore you must notify us immediately if you believe that your password is in the possession of someone else or if it may be used in an unauthorized way.</p>
                        </div>

                        <div className='py-4 flex flex-col gap-3'>
                            <h6 className='text-2xl py-2 border-b'>Treatment of information</h6>
                            <p>We may gather information and statistics collectively about all visitors to this Site which may include the information supplied by you which will help us to understand our users with the goal of providing a better service towards our Customers and Candidates. We will not disclose individual names or identifying information. All data will be in aggregate form only. Personal data is processed by us in accordance with our Privacy Policy.</p>
                        </div>

                        <div className='py-4 flex flex-col gap-3'>
                            <h6 className='text-2xl py-2 border-b'>Intellectual Property</h6>
                            <p>All information within the {name} Site is owned or licensed by {name} (including without limitation photographs and other images). You may retrieve and display the content of the Site on a computer, store such content – except in servers or other devices connected to the network- or print a copy of our content for your own non-commercial use, provided you keep intact all and any copyright and proprietary notices.</p>
                            <p>You shall non copy, modify, distribute or use for commercial purposes anything within the {name} Site without written permission from {name}.</p>
                        </div>

                        <div className='py-4 flex flex-col gap-3'>
                            <h6 className='text-2xl py-2 border-b'>Disclaimer and Liability</h6>
                            <p>{name} uses reasonable care in compiling and presenting the content found on the {name} Site, including any market conditions information, {name} uses all reasonable efforts to ensure that it is accurate however the Site is provided purely for information and you should seek further guidance and make independent inquiries before relying upon it. If {name} is informed about any inaccuracies in the Site, we will endeavor to correct the detected inaccuracies as soon as possible.</p>
                            <p>If {name} is in breach of these T&C, we will not be responsible for any losses that you may suffer, our liability shall not, in any event, include business losses such as lost data, loss of actual or anticipated salary, lost profits or business interruption or unavailability of the Site whether in full or any of the areas of the Site.</p>
                            <p>No liability is accepted by {name} for any loss or damage which may arise out of any person relying on or using any information on our Site.</p>
                            <p>These T&C shall not limit or affect our liability in cases of negligence resulting in death or personal injury.</p>
                            <p>You agree fully to indemnify us and keep us fully indemnified against all costs, expenses, claims, losses, liabilities, or proceedings arising from use or misuse by you of this Site.</p>
                            <p>We do not guarantee that any of our Customers may interview or hire Candidates, or that any Candidates will be willing to join any Customer. We make no representation or warranty as to the final terms and duration of any appointment obtained through this Site. Despite {name} takes all reasonable precautions to ensure it is the case, we cannot guarantee that any third party (including but not limited to Customers or Candidates) will use, store, keep or handle any information or data provided to them in a manner that follows all applicable regulations.</p>
                        </div>

                        <div className='py-4 flex flex-col gap-3'>
                            <h6 className='text-2xl py-2 border-b'>Changes to this Site</h6>
                            <p>We may change, suspend or discontinue any aspect of the Site at any time, including the availability of any of the Site features, stored information, pictures, or other content. {name} may amend these T&C at any time by posting amended T&C to the Site. You will be deemed to have agreed to the amended T&C when you next use this Site following any amendment.</p>
                            <p>The {name} Site is owned and operated by {name}.</p>
                            <p>If you have any queries, please contact <a href={`mailto:${email}`} className='text-primary'>{email}</a></p>
                            <p>Last Updated on {date}</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
