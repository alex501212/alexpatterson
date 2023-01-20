import project_01 from "../../images/project_01.jpg";
import project_02 from "../../images/project_02.jpg";
import project_03 from "../../images/project_03.jpg";

export const CarouselData = [
  {
    image: project_01,
    title: "Puppet CI Triage Helper Redesign",
    description:
      "I worked on redesigning a product called 'CITH'. CITH stands for 'Continuous Integration Triage Tool' which was a tool Used within CI, to display information and historical data regarding Jenkins jobs and builds helping pinpoint failures. This redesign was implemented using React and mainly consisted of updating components from the Semantic UI component library to Puppet's in house Puppet Design System.",
    link: "https://youtu.be/nSiXfMo9TFw",
    linkText: "Demo video",
  },
  {
    image: project_02,
    title: "EsportsNow – A cloud native video hosting application",
    description: "For a university assignment I developed a cloud-based video hosting platform using mainly focusing on the tools that Microsoft Azure offers such as CosmosDB and Blob storage. This solution also integrates the Cloudmersive API for virus scans for uploaded files and cloud translator features offered by Azure.",
    link: "https://youtu.be/R-1zep5bvJU",
    linkText: "Demo video",
  },
  {
    image: project_03,
    title: "UniEsports – An Esports based social media platform for higher education institutions in the United Kingdom",
    description:
      "I created a full-stack application using angular, typescript, python, flask and auth0 that allows users to find Esports teams in their higher education institution and request to join teams. The application also allows users to follow each other and add team comments with upvotes and downvotes.",
    link: "https://youtu.be/Ly1BYAQP3is",
    linkText: "Demo video",
  },
];
