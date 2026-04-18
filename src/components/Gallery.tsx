import { motion } from 'motion/react';

const IMAGES = [
  { id: 1, src: 'https://images.trvl-media.com/lodging/2000000/1860000/1856100/1856066/9ae7df34_z.jpg', alt: 'Exterior View', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-2' },
  { id: 2, src: 'https://pix8.agoda.net/property/63964506/0/d1d4cd5c64be190a20ba3fb0ae3b188f.jpeg?ce=0', alt: 'Luxury Room Detail', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 3, src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e7/86/02/standard-double-room.jpg?w=2100&h=1400&s=1', alt: 'Premium Bathroom', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { id: 4, src: 'https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/1/0/30/431/461/11424_ext_001_J.jpg', alt: 'Dining Area', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-1' },
  { id: 5, src: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhHZ_wrUk_M3YM3BP47ICidvh7fSg2tlhe1Ju_In0nhaKU2XRnahmzYR64mlrtbIGYTzqrTIzmhQGDtaGSeVMGPOSaWjXuAJ5gYv9FftD-rgoll_fSwqhboPC1oZ_2PWkyyLl2raFG8U4k9p_DQdAGm29eGb4TTWo5qkYcMXsTfeRfees0VJCw2Rqw=w203-h134-k-no', alt: 'Outdoor Pool', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
  { id: 6, src: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhEOKfpsnmN2IYe4sYvV21K6Tl-0c9IwF7JX_5T47p6NNOnX-qIALIj5FLfUZHbYCfTPLr_IqcNcnsUlwZuJGTwZ66Ow4PpqFbG15GsGhoA3IsT7jXQ_l-1k3nlJxtvNJy78D7K4Pr4OtrUqgdIO6Jt5J2fmAkvVj3GAusLdfClqXlVjoRGKXS-I=w114-h86-k-no', alt: 'Secure Parking', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-light mb-6"
          >
            A Glimpse of <span className="italic text-zinc-400">Chrismar</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-px w-24 bg-gold-500 mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${img.colSpan} ${img.rowSpan} bg-zinc-800`}
            >
              <img
                src={img.src}
                alt={img.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
