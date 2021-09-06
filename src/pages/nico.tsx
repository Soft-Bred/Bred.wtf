import React from 'react';

interface Link {
  name: string;
  description: string;
  link: string;
  icon: string;
}

const BredLinks: Link[] = [
  {
    name: 'Twitter',
    description: 'I tweet stuff. like that is the point of the website bruh',
    link: 'https://twitter.com/Soft_Bred',
    icon: 'twitter.svg'
  },
  
  {
    name: 'GitHub',
    description: 'lol I wish I knew how to code. papa rems ftw',
    link: 'https://github.com/itsRems',
    icon: 'github.svg'
  }
];

const NicoPage = () => {
  return (
    <div>
      <h1>
        hello stream
      </h1>
      {
        BredLinks.map((platform) => {
          return <LinkComponent {...platform} />;
        })
      }
    </div>
  );
};

const LinkComponent: React.FC<Link> = (props) => {
  return (
    <div>
      <a href={props.link} target="_blank">
        <h1>
          { props.name }
        </h1>
        <p>
          { props.description }
        </p>
        <img src={`/icons/${props.icon}`} />
      </a>
    </div>
  );
}

export default NicoPage;