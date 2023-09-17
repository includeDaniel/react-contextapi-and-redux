type ShowNameProps = {
    props: string;
};

export const ShowName = ({ props }: ShowNameProps) => {
    return <div>Name: {props}</div>;
};
