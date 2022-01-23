import { Link } from 'react-router-dom';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function Contact({ user }) {
    const userInfo = (
        <ul>
            <li>{user.first_name}</li>
            <li>{user.email}</li>
        </ul>
    );

    return (
        <div>
            <div>
                <div>
                    <h3>{user.first_name}
                        <Dropdown
                            overlay={userInfo}
                            trigger={['click']} >
                        
                         <DownOutlined />
                      </Dropdown>
                    </h3>
                </div>
                <Link to={`/${user.id}`}>Show More</Link>
            </div>
        </div>
    )
}

export default Contact;
