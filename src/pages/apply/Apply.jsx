import { Button, Card } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const { Meta } = Card;

function Apply() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div    
          className="col-lg-2 d-flex flex-column border-end p-3"
          style={{
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
        <div className="col-lg-10 p-4">
          <div className="mb-3">
            <HomeOutlined /> / <span>Ứng tuyển</span>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Họ tên</p>
            <input
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "100%",
                padding: "8px",
              }}
              type="text"
            />
            <p style={{ fontWeight: "bold" }}>Tuổi</p>
            <input
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "100%",
                padding: "8px",
              }}
              type="text"
            />
            <p style={{ fontWeight: "bold" }}>Vị trí ứng tuyển</p>
            <input
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "100%",
                padding: "8px",
              }}
              type="text"
            />
            <p style={{ fontWeight: "bold" }}>Email</p>
            <input
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "100%",
                padding: "8px",
              }}
              type="email"
            />
            <p style={{ fontWeight: "bold" }}>Số điện thoại</p>
            <input
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                width: "100%",
                padding: "8px",
              }}
              type="tel"
            />
            <p style={{ fontWeight: "bold" }}>Kinh nghiệm</p>
            <textarea
              style={{
                borderRadius: "8px",
                border: "1px solid #ccc",
                padding: "8px",
                width: "100%",
                boxSizing: "border-box",
              }}
              rows="4"
            ></textarea>
            <div style={{ marginTop: "12px" }}>
              <Button type="primary">Thêm</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apply;
