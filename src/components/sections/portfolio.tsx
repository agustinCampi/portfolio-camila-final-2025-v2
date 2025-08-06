"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const campaigns = [
  // Campaign 1
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/adg%20swimwear%2FSony-7488.webp?alt=media&token=007db36b-0144-4eb9-866d-fa90b072bf76", w: 800, h: 1200, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/adg%20swimwear%2FSony-0792.webp?alt=media&token=0e3a9096-492d-4a99-9946-750c555c8b46", w: 400, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/adg%20swimwear%2FSony-1078.webp?alt=media&token=bf5fe0c0-60c2-46c1-b9ce-3d57cb08d3ab", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/adg%20swimwear%2FSony-1098.webp?alt=media&token=8a0b1f6a-1909-428e-8ec4-20dc56c9f555", w: 400, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/adg%20swimwear%2FSony-2152.webp?alt=media&token=8647a0bc-14a5-46cb-8b36-54d298b6780f", w: 400, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/adg%20swimwear%2FSony-7483.webp?alt=media&token=dcb31a7f-ab62-4b2b-937d-d6b90a439eac", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/adg%20swimwear%2FSony-7485.webp?alt=media&token=174182d3-3456-4b08-8279-a9e2ea18d845", w: 400, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/adg%20swimwear%2FSony-7486.webp?alt=media&token=1c8e914d-6fe9-43ec-9ac9-518a98cc720e", w: 400, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/adg%20swimwear%2FSony-9617.webp?alt=media&token=3a56f5cc-a7d3-4305-b359-449f9d4294fd", w: 400, h: 500 }
  ],
  // Campaign 2
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_5458.webp?alt=media&token=86ca0684-1aa2-4252-9fbf-6ce33bd5bc2e", w: 900, h: 600, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_2339.webp?alt=media&token=fb7bdd79-cbe8-4621-8fa6-43647c1e2fa5", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_2346.webp?alt=media&token=56be37d6-77a1-4b5d-8c53-e1ce5fb1a21c", w: 500, h: 700 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_2366.webp?alt=media&token=8e7188e6-a0da-4fa0-932c-4c6865b4c929", w: 400, h: 400 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_2369.webp?alt=media&token=76e58218-c466-4c3c-91a3-880d2dcfd8c8", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_2380.webp?alt=media&token=479a9142-bec2-47b8-9fee-db01d8b1eb9b", w: 500, h: 700 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_2383.webp?alt=media&token=e0b36c44-a468-4198-8281-4a8be311fafa", w: 400, h: 400 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_3522.webp?alt=media&token=09e08e61-3047-4b30-a383-2bb85ba7bf05", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_3526.webp?alt=media&token=d635427e-752b-497a-ac24-e32943b6f2f5", w: 500, h: 700 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_3538.webp?alt=media&token=5c224909-243b-4aca-8c04-336b09a2ffe0", w: 400, h: 400 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_3540.webp?alt=media&token=35e4b99f-6b3f-417f-89ac-039ed90161ce", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_3542.webp?alt=media&token=c396b14e-3907-4d61-b2f8-1b3961d70431", w: 500, h: 700 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_3543.webp?alt=media&token=01e678b7-ad18-4082-bbc1-6b76f33f0eee", w: 400, h: 400 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_5452.webp?alt=media&token=57a809e3-52fd-4c45-a19b-d4044724d73e", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_5459.webp?alt=media&token=7a030321-3c3c-4a63-ade1-7a8bb0dda3e5", w: 500, h: 700 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_5460.webp?alt=media&token=fb14ce80-1f79-4c25-a164-10f28300ae90", w: 400, h: 400 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_5462.webp?alt=media&token=b92d8456-0065-477c-bf92-71963f2989c9", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_5474.webp?alt=media&token=722d4bdc-eff4-4151-8e1a-bc7c4625ddc7", w: 500, h: 700 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_8216.webp?alt=media&token=be1d1020-f037-4ac7-8cf3-6bcf8e092e3f", w: 400, h: 400 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_8370.webp?alt=media&token=abb2bdbc-f602-4983-a689-5393552db37c", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/american%20mix%2FIMG_8418.webp?alt=media&token=232eb714-9d45-4af1-a8e9-8703ce553f3a", w: 500, h: 700 }
  ],
  // Campaign 3
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/anmm%2FIMG_8530.webp?alt=media&token=3ceab9be-bf03-400f-9ce5-f3a1e18cc189", w: 800, h: 1000, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/anmm%2FIMG_8354.webp?alt=media&token=767af386-5b7f-490f-bdc8-d8afb7dbaa3a", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/anmm%2FIMG_8364.webp?alt=media&token=f18d3d56-929e-4c26-b5fa-c4b2dcdd2a7b", w: 400, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/anmm%2FIMG_8366.webp?alt=media&token=206a41bc-2b2f-4ae8-9de6-0c8ec0607ab3", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/anmm%2FIMG_8512.webp?alt=media&token=ab7a8fd1-a9ca-4862-8368-e54ec850b11c", w: 400, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/anmm%2FIMG_8529.webp?alt=media&token=d8cade34-21d0-4a76-958c-1bdf1a85af18", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/anmm%2FIMG_8549.webp?alt=media&token=74051bf3-6631-442c-89aa-31e4db66c318", w: 400, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/anmm%2FIMG_8558.webp?alt=media&token=cae2b731-83d0-48c0-8ebd-fbdf50737ea0", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/anmm%2FIMG_8588.webp?alt=media&token=5209ae52-d108-4485-8a0b-aef1353e03d6", w: 400, h: 600 }
  ],
  // Campaign 4
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/be%20ganesha%2FIMG_2313.webp?alt=media&token=6acc86c2-9313-48f1-9231-81cb3a249c36", w: 1000, h: 800, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/be%20ganesha%2F907AB727-5FFE-4B07-A447-9358DD9CE369.webp?alt=media&token=ab9bffd7-7c73-4ddc-8cbd-1e203fe73ce1", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/be%20ganesha%2F9A1FEF8B-25E9-43A1-AC37-6CF07A850F8E.webp?alt=media&token=7c60a286-5fe4-4ed9-8bd8-945b3a129871", w: 400, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/be%20ganesha%2FIMG_2309.webp?alt=media&token=67a93fda-6164-4e4e-bd6b-9ddfe3dcbed9", w: 500, h: 400 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/be%20ganesha%2FIMG_2336.webp?alt=media&token=abbca1d1-ccb9-412f-954a-a6b5d0e9ab8e", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/be%20ganesha%2FIMG_2340.webp?alt=media&token=57c7cffa-8c2a-44fe-8408-4850dd783446", w: 400, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/be%20ganesha%2FIMG_2357.webp?alt=media&token=124d4461-31bb-4ff9-b5c9-4c6b6b3003fb", w: 500, h: 400 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/be%20ganesha%2FIMG_2368.webp?alt=media&token=211fbfd2-0b88-4385-ad3e-9c36b301e833", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/be%20ganesha%2FIMG_2369.webp?alt=media&token=812ba2c6-5734-433e-bd98-b4a6abe2fa40", w: 400, h: 600 }
  ],
  // Campaign 5
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/bellako%2FDSC07325.webp?alt=media&token=91a469ec-87ed-4ea2-8f9c-44e07fd5d733", w: 800, h: 1100, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/bellako%2FDSC07052.webp?alt=media&token=7d61acda-41d5-4d31-aa32-9c10a00e175f", w: 400, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/bellako%2FDSC07060.webp?alt=media&token=790b9572-ca12-4259-91ec-5c1d15bc14f0", w: 400, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/bellako%2FDSC07078.webp?alt=media&token=5c9e798a-82ec-40af-97e8-8a891a5118aa", w: 400, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/bellako%2FDSC07109.webp?alt=media&token=dba881e7-37a0-4d5c-a845-7debd8036142", w: 400, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/bellako%2FDSC07127.webp?alt=media&token=44603a05-489b-44b0-ac36-632bf2494c93", w: 400, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/bellako%2FDSC07167.webp?alt=media&token=9da5656e-bf3e-4b79-a65c-1bd480428b35", w: 400, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/bellako%2FDSC07286.webp?alt=media&token=ca3341f6-fb29-4c8e-a1f8-b27bce2b6eaa", w: 400, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/bellako%2FDSC07287.webp?alt=media&token=45a31d54-aa65-4499-9c00-9eda74b5e32c", w: 400, h: 650 }
  ],
  // Campaign 6
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/calipsian%2FC9998D58-F62C-428D-89DF-39FA9271DF31.webp?alt=media&token=6a882c81-4b6c-492d-8e1d-49f8ef1e052c", w: 950, h: 700, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/calipsian%2FEC430A6B-5E00-4CF1-B082-8D9BF1039AE5.webp?alt=media&token=8b4cd33d-5f59-4138-845b-5098edf13b8f", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/calipsian%2FIMG_1346.webp?alt=media&token=c90c5701-e1ff-4d5b-8959-4b33acd9ded9", w: 500, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/calipsian%2FIMG_1349.webp?alt=media&token=9835870a-1e5d-4bf1-a614-b8a964c151cf", w: 400, h: 450 }
  ],
  // Campaign 7
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/cameo%2FDSC01291.webp?alt=media&token=d072c7e4-f094-4662-b88e-a3ffafbd1c5a", w: 800, h: 1200, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/cameo%2FB614FE4E-541D-4079-B676-9BAA5D28236F.webp?alt=media&token=02ece6ef-4133-4048-ac18-b47abc733785", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/cameo%2FDSC01138.webp?alt=media&token=b468fc27-f724-4be6-86fc-550b1186d114", w: 400, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/cameo%2FDSC01151.webp?alt=media&token=97d2f9b8-8a48-4179-b9a5-5b6e88302877", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/cameo%2FDSC01152.webp?alt=media&token=c5ade67f-0437-4aea-aff3-29f3c4b18922", w: 400, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/cameo%2FDSC01203.webp?alt=media&token=3c44cc35-582d-4f98-8ea5-5eb23fcd5149", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/cameo%2FDSC01268.webp?alt=media&token=a7814d3d-a538-45a1-9f35-9853e9418491", w: 400, h: 600 }
  ],
  // Campaign 8
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-091.webp?alt=media&token=9f8a57c3-0d64-4001-90fd-140b0ac5083f", w: 850, h: 1150, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-101.webp?alt=media&token=e8937f08-cdef-4a1c-8802-eafb872f35a3", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-111.webp?alt=media&token=3a877ae8-0113-406f-9d66-ef3dcafa2ff8", w: 450, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-116.webp?alt=media&token=a0e5484a-cd9e-4631-9ebd-36b96e4c2364", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-122.webp?alt=media&token=15125929-5d62-4e26-885c-677a966ceb55", w: 450, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-14.webp?alt=media&token=0c3aaf18-f7b6-4db4-9e7f-a66a38fc3192", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-140.webp?alt=media&token=375e2bf0-04b0-45a0-8971-4dd89472871c", w: 450, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-145.webp?alt=media&token=2ce2925a-84d4-4839-92c7-f62ca7a78a5b", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-164.webp?alt=media&token=3a8e62cd-037f-4b43-8eed-eb1e49c62d5a", w: 450, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-34.webp?alt=media&token=506c783e-20ac-4b3c-b150-5429ade1f2fb", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-41.webp?alt=media&token=fc0758a9-0e25-4a58-b170-2d83e94c73d1", w: 450, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/deserve%2Fdu-42.webp?alt=media&token=d5f92fa8-80f7-4343-8869-a2d42181bf5a", w: 450, h: 550 }
  ],
  // Campaign 9
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/e7%2FIMG_5369.webp?alt=media&token=a4dd3d01-5d38-41e0-a10a-bf49c5c736fa", w: 950, h: 650, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/e7%2FIMG_5362.webp?alt=media&token=3c059f28-0b32-4279-bf6d-38d4a7ea7c49", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/e7%2FIMG_5367.webp?alt=media&token=abbcc7c0-17af-41ad-a1cc-0bf001d2b956", w: 550, h: 750 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/e7%2FIMG_5417.webp?alt=media&token=6548090a-2bd1-464d-a119-2ac6dfa5b420", w: 450, h: 450 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/e7%2FIMG_5433.webp?alt=media&token=4b75afe1-0b5d-4d22-bdc7-0b4bc4089e96", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/e7%2FIMG_5436.webp?alt=media&token=2a4daafc-cc40-49db-aee6-ed8091a8c11b", w: 550, h: 750 }
  ],
  // Campaign 10
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/giorgio%2Fgiorgio-252_Original.webp?alt=media&token=285ca5be-3948-48c7-8614-f7b1ff7cf363", w: 850, h: 1050, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/giorgio%2FIMG_9761.webp?alt=media&token=5f65acda-006e-4567-93a7-2fde45d07efe", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/giorgio%2Fgiorgio-100_Original.webp?alt=media&token=fa07436d-03b9-4847-b113-8dc56739612a", w: 450, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/giorgio%2Fgiorgio-108_Original.webp?alt=media&token=5da43745-4ba6-4539-a185-7525f5012371", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/giorgio%2Fgiorgio-175_Original.webp?alt=media&token=75edfdc0-6642-4967-a73f-23810d15cfee", w: 450, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/giorgio%2Fgiorgio-54_Original.webp?alt=media&token=c0b192cf-8b75-40e9-ae50-e63a0142de60", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/giorgio%2Fgiorgio-63_Original.webp?alt=media&token=af515bc1-358d-46ab-88c3-201f129a9485", w: 450, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/giorgio%2Fgiorgio-95_Original.webp?alt=media&token=0f16854b-6aad-45cc-b18f-52351dcb2252", w: 450, h: 550 }
  ],
  // Campaign 11
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/otras%2FCAMBRIA_genascochet(325).webp?alt=media&token=09a5cbbf-69aa-4794-a8ea-de00b938f3c6", w: 1050, h: 850, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/otras%2FCAMBRIA_genascochet(173).webp?alt=media&token=b181bbd8-c5c9-4bb3-b5af-c4f087bac3d2", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/otras%2FCAMBRIA_genascochet(187).webp?alt=media&token=25e2a2ef-1c11-465a-a31b-eb0026b66f8b", w: 550, h: 450 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/otras%2FCAMBRIA_genascochet(257).webp?alt=media&token=3d9093ef-ed60-4310-ae14-9f3d9c002c64", w: 450, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/otras%2FIMG_1912.webp?alt=media&token=f524b06a-eac8-480e-856b-f575af263b80", w: 450, h: 550 }
  ],
  // Campaign 12
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/otro%2FIMG_8312.webp?alt=media&token=53c974d9-6108-413d-a822-6b2bff9fda4e", w: 850, h: 1150, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/otro%2FIMG_8311.webp?alt=media&token=50a60d48-b2f6-4219-89dd-b48fb37ae4c9", w: 450, h: 650 }
  ],
  // Campaign 13
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/polas%2F787DB64F-7E56-4490-96C5-F5FD0972F866.webp?alt=media&token=76a51f20-ed92-4a2d-8317-02593bff9931", w: 950, h: 750, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/polas%2FB653C373-16D7-4EB7-9997-02D9286E8688(1).webp?alt=media&token=fa9e7723-2dff-4a3b-93c5-86470d98298d", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/polas%2FIMG_7957.webp?alt=media&token=d291d317-a265-488f-a875-64a5867d41a2", w: 550, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/polas%2FIMG_7981.webp?alt=media&token=45893a2a-e9f8-48d0-bdfe-4942c7ebc4af", w: 450, h: 450 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/polas%2FIMG_7983.webp?alt=media&token=816cbccb-3010-4b2c-a146-e24a2f11ded0", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/polas%2FIMG_8291.webp?alt=media&token=df39f52c-0792-49dd-93af-f82f1cd777d4", w: 550, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/polas%2FIMG_8299.webp?alt=media&token=37a5f54b-d841-4681-8ad6-0eaee3e017d4", w: 450, h: 450 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/polas%2FIMG_8310.webp?alt=media&token=5a553fec-3840-422f-8148-16262d05dc34", w: 450, h: 550 }
  ],
  // Campaign 14
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vdamiani%2FIMG_9730.webp?alt=media&token=9416c020-7615-4b0a-9572-b7189cc33004", w: 850, h: 1250, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vdamiani%2FIMG_9213.webp?alt=media&token=0d56a921-5718-4058-89c9-8d7401b0c647", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vdamiani%2FIMG_9640.webp?alt=media&token=ec957f9c-ed03-4f9a-b720-ba80026d146d", w: 450, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vdamiani%2FIMG_9649.webp?alt=media&token=12c5bd46-a32e-4daa-85c4-e556862a6db1", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vdamiani%2FIMG_9742.webp?alt=media&token=04791c45-5fcb-4394-8a4a-a6171d6ab1a9", w: 450, h: 650 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vdamiani%2FIMG_9746.webp?alt=media&token=e5fa9943-7e81-43da-bf1d-c9ddcf7107f2", w: 450, h: 550 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vdamiani%2FIMG_9752.webp?alt=media&token=fdf14d00-baab-4e55-ae90-8d06d3fd0077", w: 450, h: 650 }
  ],
  // Campaign 15
  [
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vitabella%2FIMG_1255.webp?alt=media&token=17bde066-8d83-4c66-b528-04a3efddb11b", w: 1000, h: 700, featured: true },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vitabella%2FIMG_1240.webp?alt=media&token=2a221706-7abb-4eee-a6b7-4f219e0d29b2", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vitabella%2FIMG_1244.webp?alt=media&token=16958dca-e8b9-4327-8ac7-5937d098ff0e", w: 500, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vitabella%2FIMG_1245.webp?alt=media&token=1aa3df03-aad1-402f-a183-12d71b76f07d", w: 400, h: 450 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vitabella%2FIMG_1248.webp?alt=media&token=2b858c11-434c-400f-a344-fd269537a29d", w: 400, h: 500 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vitabella%2FIMG_1252.webp?alt=media&token=7161a6ab-0e63-41db-b0cc-0fc2f82ebbe9", w: 500, h: 600 },
    { src: "https://firebasestorage.googleapis.com/v0/b/camila-tessio-portfolio-2nzf8.firebasestorage.app/o/vitabella%2FIMG_1257.webp?alt=media&token=44c9a304-9aa0-4811-9dea-6534daee6b6c", w: 400, h: 450 }
  ]
];

const PortfolioImage = ({ src, w, h, featured = false }: { src?: string, w: number, h: number, featured?: boolean }) => (
  <motion.div
    className={featured ? "md:col-span-2 md:row-span-2" : ""}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-0 rounded-md h-full">
      <CardContent className="p-0 h-full">
        <Image
          src={src || `https://placehold.co/${w}x${h}.png`}
          alt={`Portfolio image ${w}x${h}`}
          width={w}
          height={h}
          className="w-full h-full object-cover"
          loading="lazy"
          data-ai-hint="fashion model portrait"
        />
      </CardContent>
    </Card>
  </motion.div>
);

const CampaignSeparator = () => (
  <div className="py-16 md:py-32 flex items-center justify-center">
    <hr className="w-full border-t border-border" />
  </div>
);

export default function Portfolio() {
  return (
    <section id="portfolio" className="container mx-auto px-6 py-16 md:py-24 pt-24 md:pt-24">
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