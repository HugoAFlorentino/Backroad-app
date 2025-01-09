const PageLinks = ({ href, text, linkClass }) => {
  return (
    <li>
      <a href={href} className={linkClass}>
        {text}
      </a>
    </li>
  );
};

export default PageLinks;
