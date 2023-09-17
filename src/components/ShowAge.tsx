type ShowAgeProps = {
    props: number;
};

export const ShowAge = ({ props }: ShowAgeProps) => {
    return <div>Age: {props}</div>;
};
