import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const campaigns = [
  // Campaign 1
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/adg%20swimwear%2FSony-7488.webp?alt=media&token=007db36b-0144-4eb9-866d-fa90b072bf76", w: 800, h: 1200, featured: true }, { w: 400, h: 500 }, { w: 400, h: 600 }, { w: 400, h: 550 }
  ],
  // Campaign 2
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_5458.webp?alt=media&token=86ca0684-1aa2-4252-9fbf-6ce33bd5bc2e", w: 900, h: 600, featured: true }, { w: 400, h: 400 }, { w: 500, h: 700 }, { w: 400, h: 500 }
  ],
  // Campaign 3
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/anmm%2FIMG_8530.webp?alt=media&token=3ceab9be-bf03-400f-9ce5-f3a1e18cc189", w: 800, h: 1000, featured: true }, { w: 400, h: 600 }, { w: 400, h: 500 }
  ],
  // Campaign 4
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/be%20ganesha%2FIMG_2313.webp?alt=media&token=6acc86c2-9313-48f1-9231-81cb3a249c36", w: 1000, h: 800, featured: true }, { w: 500, h: 400 }, { w: 400, h: 500 }, { w: 400, h: 600 }
  ],
   // Campaign 5
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/bellako%2FDSC07325.webp?alt=media&token=91a469ec-87ed-4ea2-8f9c-44e07fd5d733", w: 800, h: 1100, featured: true }, { w: 400, h: 550 }, { w: 400, h: 650 }
  ],
   // Campaign 6
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/calipsian%2FC9998D58-F62C-428D-89DF-39FA9271DF31.webp?alt=media&token=6a882c81-4b6c-492d-8e1d-49f8ef1e052c", w: 950, h: 700, featured: true }, { w: 400, h: 500 }, { w: 500, h: 600 }, { w: 400, h: 450 }
  ],
   // Campaign 7
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/cameo%2FDSC01291.webp?alt=media&token=d072c7e4-f094-4662-b88e-a3ffafbd1c5a", w: 800, h: 1200, featured: true }, { w: 400, h: 600 }, { w: 400, h: 500 }
  ],
  // Campaign 8
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-091.webp?alt=media&token=9f8a57c3-0d64-4001-90fd-140b0ac5083f", w: 850, h: 1150, featured: true }, { w: 450, h: 550 }, { w: 450, h: 650 }
  ],
  // Campaign 9
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/e7%2FIMG_5369.webp?alt=media&token=a4dd3d01-5d38-41e0-a10a-bf49c5c736fa", w: 950, h: 650, featured: true }, { w: 450, h: 450 }, { w: 550, h: 750 }, { w: 450, h: 550 }
  ],
  // Campaign 10
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/giorgio%2Fgiorgio-252_Original.webp?alt=media&token=285ca5be-3948-48c7-8614-f7b1ff7cf363", w: 850, h: 1050, featured: true }, { w: 450, h: 650 }, { w: 450, h: 550 }
  ],
  // Campaign 11
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/otras%2FCAMBRIA_genascochet(325).webp?alt=media&token=09a5cbbf-69aa-4794-a8ea-de00b938f3c6", w: 1050, h: 850, featured: true }, { w: 550, h: 450 }, { w: 450, h: 550 }, { w: 450, h: 650 }
  ],
  // Campaign 12
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/otro%2FIMG_8312.webp?alt=media&token=53c974d9-6108-413d-a822-6b2bff9fda4e", w: 850, h: 1150, featured: true }, { w: 450, h: 550 }, { w: 450, h: 650 }
  ],
  // Campaign 13
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/polas%2F787DB64F-7E56-4490-96C5-F5FD0972F866.webp?alt=media&token=76a51f20-ed92-4a2d-8317-02593bff9931", w: 950, h: 750, featured: true }, { w: 450, h: 550 }, { w: 550, h: 650 }, { w: 450, h: 450 }
  ],
  // Campaign 14
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vdamiani%2FIMG_9730.webp?alt=media&token=9416c020-7615-4b0a-9572-b7189cc33004", w: 850, h: 1250, featured: true }, { w: 450, h: 650 }, { w: 450, h: 550 }
  ],
  // Campaign 15
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vitabella%2FIMG_1255.webp?alt=media&token=17bde066-8d83-4c66-b528-04a3efddb11b", w: 1000, h: 700, featured: true }, { w: 400, h: 500 }, { w: 500, h: 600 }, { w: 400, h: 450 }
  ],
];

const PortfolioImage = ({ src, w, h, featured = false }: { src?: string, w: number, h: number, featured?: boolean }) => (
  <div className={featured ? "md:col-span-2 md:row-span-2" : ""}>
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-0 rounded-md">
      <CardContent className="p-0">
        <Image
          src={src || `https://placehold.co/${w}x${h}.png`}
          alt={`Portfolio image ${w}x${h}`}
          width={w}
          height={h}
          className="w-full h-auto object-cover"
          loading="lazy"
          data-ai-hint="fashion model portrait"
        />
      </CardContent>
    </Card>
  </div>
);

const CampaignSeparator = () => (
  <div className="py-16 md:py-32 flex items-center justify-center">
    <hr className="w-full border-t border-border" />
  </div>
);

export default function Portfolio() {
  return (
    <section id="portfolio" className="container mx-auto px-6 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-light uppercase tracking-widest text-center mb-16 md:mb-24">
        Portfolio
      </h2>
      <div className="flex flex-col">
        {campaigns.map((campaign, index) => (
          <div key={`campaign-${index}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4 md:gap-8">
              {campaign.map((img, imgIndex) => (
                <PortfolioImage key={imgIndex} {...img} />
              ))}
            </div>
            {index < campaigns.length - 1 && <CampaignSeparator />}
          </div>
        ))}
      </div>
    </section>
  );
}
