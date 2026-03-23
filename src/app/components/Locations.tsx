import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  address: string;
  hours: string;
  phone: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Downtown Lucky',
    address: '123 Clover Street, Green City, GC 12345',
    hours: 'Mon-Fri: 7am-8pm, Sat-Sun: 8am-9pm',
    phone: '(555) 123-4567',
  },
  {
    id: 2,
    name: 'Riverside Café',
    address: '456 Fortune Avenue, Riverside, RS 67890',
    hours: 'Mon-Fri: 6am-7pm, Sat-Sun: 7am-8pm',
    phone: '(555) 234-5678',
  },
  {
    id: 3,
    name: 'Garden District',
    address: '789 Lucky Lane, Garden District, GD 54321',
    hours: 'Mon-Sun: 7am-9pm',
    phone: '(555) 345-6789',
  },
];

export function Locations() {
  return (
    <section id="locations" className="py-20 bg-gradient-to-b from-[#F0FFF8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl mb-4 text-[#2D8B5F]"
            style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
          >
            📍 Our Locations
          </h2>
          <p
            className="text-xl text-[#1E6F4D] max-w-2xl mx-auto"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Find your nearest Four Leaf Café
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#2D8B5F] to-[#1E6F4D] rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="text-white" size={32} />
              </div>

              <h3
                className="text-2xl mb-4 text-[#2D8B5F]"
                style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
              >
                {location.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#2D8B5F] flex-shrink-0 mt-1" size={20} />
                  <p
                    className="text-[#1E6F4D]"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {location.address}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-[#2D8B5F] flex-shrink-0 mt-1" size={20} />
                  <p
                    className="text-[#1E6F4D]"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {location.hours}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-[#2D8B5F] flex-shrink-0 mt-1" size={20} />
                  <p
                    className="text-[#1E6F4D]"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {location.phone}
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full py-3 text-white rounded-full shadow-md hover:shadow-lg transition-all"
                style={{
                  fontFamily: 'Quicksand, sans-serif',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #2D8B5F 0%, #1E6F4D 100%)',
                }}
              >
                Get Directions
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
