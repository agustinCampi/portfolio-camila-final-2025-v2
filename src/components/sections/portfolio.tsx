import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const campaigns = [
  // Campaign 1
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/adg%20swimwear%2FSony-7488.webp?alt=media&token=007db36b-0144-4eb9-866d-fa90b072bf76", w: 800, h: 1200, featured: true }, { w: 400, h: 500 }, { w: 400, h: 600 }, { w: 400, h: 550 }
  ],
  // Campaign 2
  [
    { w: 900, h: 600, featured: true }, { w: 400, h: 400 }, { w: 500, h: 700 }, { w: 400, h: 500 }
  ],
  // Campaign 3
  [
    { w: 800, h: 1000, featured: true }, { w: 400, h: 600 }, { w: 400, h: 500 }
  ],
  // Campaign 4
  [
    { w: 1000, h: 800, featured: true }, { w: 500, h: 400 }, { w: 400, h: 500 }, { w: 400, h: 600 }
  ],
   // Campaign 5
  [
    { w: 800, h: 1100, featured: true }, { w: 400, h: 550 }, { w: 400, h: 650 }
  ],
   // Campaign 6
  [
    { w: 950, h: 700, featured: true }, { w: 400, h: 500 }, { w: 500, h: 600 }, { w: 400, h: 450 }
  ],
   // Campaign 7
  [
    { w: 800, h: 1200, featured: true }, { w: 400, h: 600 }, { w: 400, h: 500 }
  ],
  // Campaign 8
  [
    { w: 850, h: 1150, featured: true }, { w: 450, h: 550 }, { w: 450, h: 650 }
  ],
  // Campaign 9
  [
    { w: 950, h: 650, featured: true }, { w: 450, h: 450 }, { w: 550, h: 750 }, { w: 450, h: 550 }
  ],
  // Campaign 10
  [
    { w: 850, h: 1050, featured: true }, { w: 450, h: 650 }, { w: 450, h: 550 }
  ],
  // Campaign 11
  [
    { w: 1050, h: 850, featured: true }, { w: 550, h: 450 }, { w: 450, h: 550 }, { w: 450, h: 650 }
  ],
  // Campaign 12
  [
    { w: 850, h: 1150, featured: true }, { w: 450, h: 550 }, { w: 450, h: 650 }
  ],
  // Campaign 13
  [
    { w: 950, h: 750, featured: true }, { w: 450, h: 550 }, { w: 550, h: 650 }, { w: 450, h: 450 }
  ],
  // Campaign 14
  [
    { w: 850, h: 1250, featured: true }, { w: 450, h: 650 }, { w: 450, h: 550 }
  ],
  // Campaign 15
  [
    { w: 1000, h: 700, featured: true }, { w: 400, h: 500 }, { w: 500, h: 600 }, { w: 400, h: 450 }
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