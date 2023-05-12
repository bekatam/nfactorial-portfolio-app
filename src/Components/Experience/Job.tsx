type jobProps = {
    role: string,
    city: string,
    descr: string,
    years: string
}
export default function Job(props:jobProps) {
    const {role, city, descr, years} = props;
    return (
        <div className="job__wrapper">
            {years}
            <div className="job__item">
                <div className="job__item__main">
                    <div className="job__item__main__list"></div>
                    <div className="job__item__main__item">
                        <div className="job__item__main__role">{role}</div>
                        <div className="job__item__main__city">{city}</div>
                    </div>
                </div>
                <div className="job__item__descr">
                    {descr}
                </div>
            </div>
        </div>
    )
}