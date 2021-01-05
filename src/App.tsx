import React from "react";
import { Layout, Menu,Button } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import "./App.css";

const { Header, Sider, Content, Footer } = Layout;

class App extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout className="layout-wrap">
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    trigger={null}
                    collapsible
                    onBreakpoint={(broken) => {
                        this.setState({ collapsed: broken });
                    }}
                    // collapsed={this.state.collapsed}
                >
                    <div className="logo" >
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                    >
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    >
                        {React.createElement(
                            this.state.collapsed
                                ? MenuUnfoldOutlined
                                : MenuFoldOutlined,
                            {
                                className: "trigger",
                                onClick: this.toggle,
                            }
                        )}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                        }}
                    >
                        <Button type="primary">1212</Button>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
    componentDidUpdate(){
        console.log(this.state.collapsed)
    }
}

export default App;
