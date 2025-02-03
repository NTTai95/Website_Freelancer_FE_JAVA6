
import scss from "./profileFreelancers.module.scss"
import { Image, Card, Tag, Divider, Button } from 'antd';
const { Meta } = Card;
function ProfileFreelancers() {
    return (<div className="container">
        <div className="row">
            <div className="col-3 border-end">
                <Card className='mt-4'
                    hoverable
                    cover={<Image

                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />}
                >
                    <div>
                        <div>
                            <b>Họ tên: </b><span>Nguyễn Tấn Tài</span>
                        </div>
                        <div>
                            <b>Ngày sinh: </b><span>10/10/2000</span>
                        </div>
                        <div>
                            <b>Email: </b><span>nguyentantaivithanh@gmail.com</span>
                        </div><div>
                            <b>Di động: </b><span>09195173211</span>
                        </div>
                    </div>
                </Card>
                <Button className="mt-3 w-100" type="primary">Chỉnh sửa</Button>
            </div>

            <div className="col-9 px-5">
                <div>
                    <h2 className='text-primary'>Tóm lược</h2>
                    <Divider />
                    <p style={{ fontSize: "17px" }}>Tôi là một lập trình viên chuyên ngành phát triển phần mềm với niềm đam mê trong việc
                        xây dựng và tối ưu hóa các hệ thống công nghệ. Với nền tảng vững chắc về lập trình và
                        cơ sở dữ liệu, tôi đã tham gia phát triển nhiều dự án, trong đó có các nền tảng kết nối
                        giữa nhà tuyển dụng và freelancer, hệ thống quản lý nhà hàng, thư viện, và thương mại
                        điện tử.<br /><br />
                        Tôi có kinh nghiệm làm việc với các công nghệ hiện đại như Vue.js,
                        React.js, Bootstrap 5, và hệ quản trị cơ sở dữ liệu. Ngoài ra, tôi còn có khả năng
                        thiết kế và triển khai các hệ thống phần mềm có phân quyền phức tạp, tích hợp AI,
                        gamification và hợp đồng thông minh.<br /><br />
                        Bên cạnh kỹ năng chuyên môn, tôi luôn chú trọng đến tư duy logic, khả năng làm việc nhóm,
                        và tinh thần trách nhiệm trong công việc. Tôi mong muốn đóng góp vào các dự án sáng tạo,
                        mang lại giá trị thực tế và phát triển bản thân trong môi trường chuyên nghiệp.</p>
                    <Divider />
                </div>
                <div className="mb-4">
                    <h2 className='text-primary'>Ngôn ngữ</h2>
                    <Tag className="fs-6 p-1" color="magenta">Tiếng Anh</Tag>
                    <Tag className="fs-6 p-1" color="cyan">Tiếng Nga</Tag>
                </div>
                <Divider />
                <div className="mb-4">
                    <h2 className='text-primary'>Kỹ năng</h2>
                    <Tag className="fs-6 p-1" bordered={false} color="processing">
                        Java
                    </Tag>
                    <Tag className="fs-6 p-1" bordered={false} color="gold">
                        React
                    </Tag>
                    <Tag className="fs-6 p-1" bordered={false} color="cyan">
                        Copy Writing
                    </Tag>
                    <Tag className="fs-6 p-1" bordered={false} color="success">
                        Copy & Paste
                    </Tag>
                </div>
            </div>
        </div>
    </div>);
}

export default ProfileFreelancers;