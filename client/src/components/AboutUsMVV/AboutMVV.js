import React from "react";
import "./AboutMVV.scss";
import { motion } from "framer-motion";

const AboutMVV = () => {
  return (
    <>
      <div className="pt-20">
        <div className="MVVsocket flex flex-col items-center space-y-8 relative">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-3xl lg:text-5xl text-center font-bold text-white"
          >
            What we stand for
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white text-sm lg:text-xl text-center w-full px-4 lg:w-1/2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            blanditiis sequi dolore ut neque voluptate adipisci perspiciatis
            nesciunt, vero aliquid.
          </motion.p>
          <motion.div className="MVV m-auto max-w-7xl flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mission"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4f2kSDaKZJvlc_TsEr0X1oB2i-EMdaLLqg&usqp=CAU"
                alt="mission"
              />
              <h2 className="font-bold">Mission</h2>
              <p className="text-sm text-center">
                {" "}
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available.
              </p>
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="vision"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKLZ1unLmSPTL3DOwG3YITKFYgCy37553fA&usqp=CAU"
                alt="vision"
              />
              <h2 className="font-bold">Vision</h2>
              <p className="text-sm text-center">
                {" "}
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available.
              </p>
            </motion.div>{" "}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="value"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmewhH5wIk-HMYcra3zgvMhHvCE2jfvGqCA&usqp=CAU"
                alt="valuen"
              />
              <h2 className="font-bold">Value</h2>
              <p className="text-sm text-center">
                {" "}
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutMVV;
