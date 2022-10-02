import './Card.css'

type IProps = {
    data: {
    first_name: string;
    avatar: string;
    last_name: string;
    gender: string;
    username: string;
    email: string;
    date_of_birth: string;
    address: {
        city: string;
        state: string;
        zip_code: string;
        // street_
    }
}}

const Card = ({data}: IProps) => {
    const {
        first_name,
        avatar,
        last_name,
        gender,
        username,
        email,
        date_of_birth,
        address
    } = data;
    return (
        <div className='card-container'>
            <div className="card-inner">
                <div className="card-front">
                    <img src={avatar}  className="image" alt=''/>
                    <p className="info">
                        <span><b>Fullname:</b> {first_name + ' ' + last_name}</span>
                        <span><b>Gender:</b> {gender}</span>
                        <span><b>Username:</b> {username}</span>
                    </p>
                </div>
                <div className="card-back">
                    <span><b>Email: </b>{email}</span>
                    <span><b>Birth: </b>{date_of_birth}</span>
                    <span><b>Address: </b>{address.city} {address.state}</span>
                    <span><b>Zip Code: </b>{address.zip_code}</span>
                </div>
            </div>
        </div>
    )
}

export default Card