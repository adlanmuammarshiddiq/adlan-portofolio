import { BiLogoPostgresql} from "react-icons/bi";
import { DiGithubAlt, DiMongodb, DiMysql} from "react-icons/di";
import {  FaMicrosoft, FaGoogle} from "react-icons/fa";
import { FaGitAlt, FaPython} from "react-icons/fa6";
import { CiFaceSmile } from "react-icons/ci";
import { BsPersonBoundingBox } from "react-icons/bs";
import { SiFlask, SiScipy, SiStreamlit, SiTableau, SiLooker, SiSpacy, SiOpencv, SiPandas, SiNumpy, SiPytorch, SiOnnx, SiKeras, SiPostman, SiScikitlearn, SiTensorflow } from "react-icons/si";


function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20">
      {/* =========== SKILLS TITLE =========== */}
      <h4 className="text-4xl font-bold text-center mt-0 dark:text-white">
        Technologies I Use 
      </h4>
      {/* =========== LIST OF SKILLS =========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <FaPython className="text-2xl" /> Python
        </span>

				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiScikitlearn className="text-2xl" /> Scikit-learn
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiKeras className="text-2xl" /> Keras
        </span>
        <span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiTensorflow className="text-2xl" /> Tensorflow
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiPytorch className="text-2xl" /> Pytorch
        </span>
        <span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiScipy className="text-2xl" /> Scipy
        </span>
        <span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <FaGoogle className="text-2xl" /> BERT
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiSpacy className="text-2xl" /> Spacy
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiPandas className="text-2xl" /> Pandas
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiNumpy className="text-2xl" /> Numpy
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiFlask className="text-2xl" /> Flask
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiOpencv className="text-2xl" /> OpenCV
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiOnnx className="text-2xl" /> ONNX
        </span>
        <span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <BsPersonBoundingBox className="text-2xl" /> YOLO
        </span>
        <span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <CiFaceSmile className="text-2xl" /> Hugging Face
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiTableau className="text-2xl" /> Tableau
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <FaMicrosoft className="text-2xl" /> Power BI
        </span>
        <span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiLooker className="text-2xl" /> Looker Studio
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <FaGitAlt className="text-2xl" /> Git
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <DiGithubAlt className="text-2xl" /> Github
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiPostman className="text-2xl" /> Postman
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <SiStreamlit className="text-2xl" /> Streamlit
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <DiMysql className="text-2xl" /> Mysql
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <DiMongodb className="text-2xl" /> MongoDB
        </span>
				<span className="inline-flex items-center gap-x-6 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
          <BiLogoPostgresql className="text-2xl" /> PostgreSQL
        </span>
      </div>
    </section>
  );
}

export default Skills;
