import resumePDF from "../Images/Resume.pdf";

function Resume() {
  return (
    <div>
      <embed src={resumePDF} width="100%" height="900rem" />
    </div>
  );
}

export default Resume;
