import React, { useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme, Pagination } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import CharCards from "./components/CharCards/CharCards";
import MyPagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import getCharacters from "./services/characters";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.scss";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updatedFetchedData] = useState([]);
  const [search, setSearch] = useState("");

  const { info, results } = fetchedData;

  let PAGE_URL = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    getCharacters(PAGE_URL).then((res) => updatedFetchedData(res));
  }, [PAGE_URL]);

  return (
    <Layout className="mainLayout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          style={{ marginTop: "10px" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ color: "#e4e5e7" }}
                  size="2xl"
                />
              ),
              label: "Characters",
            },
            {
              key: "2",
              icon: (
                <FontAwesomeIcon
                  icon={faClapperboard}
                  style={{ color: "#e4e5e7" }}
                  size="2xl"
                />
              ),
              label: "Episodes",
            },
            {
              key: "3",
              icon: (
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#e4e5e7" }}
                  size="2xl"
                />
              ),
              label: "Places",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className="mainContent"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div>
            <Search setPageNumber={setPageNumber} setSearch={setSearch} />
          </div>
          <div className="cardAndPaginate">
            <div className="charCards">
              <CharCards results={results} />
            </div>
            <MyPagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
