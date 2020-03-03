# antd-design-pro搭建教程

<a name="6de286da"></a>
## 一、初始化项目

<a name="2ad00d73"></a>
### 1.开发环境

1. 安装node，验证安装成功`node -v; npm -v`; 为了使用国内源，可以安装cnpm`npm install -g cnpm --registry=https://registry.npm.taobao.org`，验证安装成功`cnpm -v`

<a name="e2242d3f"></a>
### 2.安装umi依赖

1. 创建文件夹`mkdir antd-course&&cd antd-course`
2. 初始化package.json`cnpm init -y`
3. 安装umi依赖`cnpm install umi --save-dev`

<a name="96c7fd05"></a>
### 3.hello world页面

1. 先初始化 umi 的[配置](https://umijs.org/zh/config/#singular)，配置文件为[config/config.js](https://umijs.org/zh/guide/app-structure.html#es6-%E8%AF%AD%E6%B3%95)

```
export default {
    singular: true
}
```

2. 新建hello world组件src/page/HelloWorld.js

```
export default () => {
    return (
        <div>
            Hello World
        </div>
    )
}
```

3. 配置项目启动脚本package.json

```
{
    ...
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "umi dev",
        "build": "umi build"
      },
    ...
}
```

4. [配置路由](https://umijs.org/zh/config/#routes)

```
export default {
    singular: true,
    routes: [{
        path: '/',
        component: './HelloWorld'
    }]
}
```

5. 启动服务 `cnpm run dev`

<a name="61a1eaf7"></a>
### 4.添加umi-plugin-react插件

1. 安装[umi-plugin-react](https://umijs.org/zh/plugin/umi-plugin-react.html#%E5%AE%89%E8%A3%85)插件 `cnpm install umi-plugin-react --save-dev`
2. [配置文件](https://umijs.org/zh/config/#plugins)

```
export default {
    ...
    plugins: [
        ['umi-plugin-react', {
        }],
    ],
    ...
}
```

<a name="5d1fad94"></a>
### 5. .gitignore

1. 创建gitignore

```
node_modules
dist
.umi
```

2. 提交代码

```
git init
git add -A
git commit -m 'init'
```

<a name="aa6b8e6a"></a>
## 二、使用Ant Design组件

<a name="pYyMF"></a>
### 1. 引入antd

```
export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true
    }],
  ],
  // ...
}
```

<a name="xs2Xz"></a>
### 2. 使用antd `src/page/HelloWorld.js`

```
import { Card } from 'antd';
export default () => {
    const style = {
      width: '400px',
      margin: '30px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      border: '1px solid #e8e8e8',
    };
  
    return (
      <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
          <Card.Meta
            avatar={<img 
            alt=""
            style={{ width: '64px', height: '64px', borderRadius: '32px' }}
            src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
            />}
            title="Alipay"
            description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
          />
      </Card>
    );
}
```

<a name="7b3db80b"></a>
## 三、布局

<a name="IgvTN"></a>
### 1. 添加基本布局 `src/layout/index.js`

```
import {Component} from 'react';
import {Layout} from 'antd';

const {Header, Sider, Content, Footer} = Layout;

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{minHeight: '100vh', color: 'white'}} >
                    Sider
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;
```

<a name="t0d92"></a>
### 2. 配置路由 `config/config.js`

```
export default {
    ...
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: './HelloWorld'
            },
            {
                path: '/helloworld',
                component: './HelloWorld'
            }
        ]
    }]
    ...
}
```

<a name="f96cd335"></a>
## 四、侧边导航

<a name="ssPoa"></a>
### 1. 添加固定侧边导航

```
import {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';

const {Header, Sider, Content, Footer} = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{minHeight: '100vh', color: 'white'}} >
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
                        <Menu.Item key='1'>
                            <Icon type='pie-chart' />
                            <span>HelloWorld</span>
                        </Menu.Item>
                        <SubMenu key='sub1' title={<span><Icon type='dashboard' /><span>Dashboard</span></span>}>
                            <Menu.Item key='2'>分析页</Menu.Item>
                            <Menu.Item key='3'>监控页</Menu.Item>
                            <Menu.Item key='4'>工作台</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;
```

<a name="d481565c"></a>
## 五、路由配置

<a name="5BSI6"></a>
### 1. 创建页面组件

```
// src/page/Dashboard/Analysis.js
export default () => {
   return <h1>Analysis Page</h1>
}
```

```
// src/page/Dashboard/Monitor.js
export default () => {
  return <h1>Monitor Page</h1>
};
```

```
// src/page/Dashboard/Workplace.js
export default () => {
  return <h1>Workplace Page</h1>
};
```

<a name="3TCWg"></a>
### 2. 配置应用路由

```
export default {
    ...
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: './HelloWorld'
            },
            {
                path: '/helloworld',
                component: './HelloWorld'
            },
            {
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            }
        ]
    }]
    ...
}
```

<a name="WnEjL"></a>
### 3. 配置侧边栏导航

```
import {Component} from 'react';
import Link from 'umi/link';
import {Layout, Menu, Icon} from 'antd';

const {Header, Sider, Content, Footer} = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{minHeight: '100vh', color: 'white'}} >
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
                        <Menu.Item key='1'>
                            <Link to='/helloworld'>
                                <Icon type='pie-chart' />
                                <span>HelloWorld</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu key='sub1' title={<span><Icon type='dashboard' /><span>Dashboard</span></span>}>
                            <Menu.Item key='2'><Link to='/dashboard/analysis'>分析页</Link></Menu.Item>
                            <Menu.Item key='3'><Link to='/dashboard/monitor'>监控页</Link></Menu.Item>
                            <Menu.Item key='4'><Link to='/dashboard/workplace'>工作台</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;
```

<a name="fb262b69"></a>
## 六、使用model

<a name="YXEvA"></a>
### 1. 引入dva config/config.js

```
export default {
    ...
    plugins: [
        ['umi-plugin-react', {
          antd: true,
          dva: true,
        }], 
      ],
    ...
}
```

注:dva数据流向图
<a name="6Gp6Y"></a>
### [![](https://zos.alipayobjects.com/rmsportal/PPrerEAKbIoDZYr.png#align=left&display=inline&height=508&originHeight=508&originWidth=1614&status=done&style=none&width=1614)](https://zos.alipayobjects.com/rmsportal/PPrerEAKbIoDZYr.png)
<a name="MTAJm"></a>
### 2. 搭建基于 model 的卡片列表页面

```
// 添加路由 config/config.js
export default {
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            ...
            {
                path: '/puzzlecards',
                component: './PuzzleCards'
            },
        ]
    }]
// 左侧导航栏 src/layout.index.js
    ...
    <Menu.Item key='5'>
        <Link to='/puzzlecards'>
            <Icon type='pie-chart' />
            <span>PuzzleCards</span>
        </Link>
    </Menu.Item>
    ...
```

```
// puzzlecards页面 src/page/PuzzleCards.js
import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';
const mapStateToProps = (state) => ({
    cardList: state[namespace].cardList
});
const mapDispatchToProps = (dispatch) => ({
    addNewCard(newCard) {
        dispatch({
            type: `${namespace}/addNewCard`,
            payload: newCard
        });
    }
})

@connect(mapStateToProps, mapDispatchToProps)
class PuzzleCards extends Component {
    // constructor(props) {
    //     super(props);
    //     this.counter = 100;
    //     this.state = {
    //         cardList: [
    //             {
    //                 id: 1,
    //                 setup: 'Did you hear about the two silk worms in a race?',
    //                 punchline: 'It ended in a tie',
    //             },
    //             {
    //                 id: 2,
    //                 setup: 'What happens to a frog\'s car when it breaks down?',
    //                 punchline: 'It gets toad away',
    //             },
    //         ],
    //     }
    // }

    // addNewCard = () => {
    //     this.setState((prevState) => {
    //         const prevCardList = prevState.cardList;
    //         this.counter += 1;
    //         const card = {
    //             id: this.counter,
    //             setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    //             punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    //         };
    //         return {
    //             cardList: prevCardList.concat(card)
    //         }
    //     });
    // }

    render() {
        return (
            <div>
                {
                    this.props.cardList.map(card => (
                        <Card key={card.id}>
                            <div>Q: {card.setup}</div>
                            <div><strong>A: {card.punchline}</strong></div>
                        </Card>
                    ))
                }
                <div>
                    <Button onClick={() => this.props.addNewCard({
                        setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                        punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    })}>添加卡片</Button>
                </div>
                {/* {
                    this.state.cardList.map(card => (
                        <Card key={card.id}>
                            <div>Q: {card.setup}</div>
                            <div><strong>A: {card.punchline}</strong></div>
                        </Card>
                    ))
                }
                <div>
                    <Button onClick={this.addNewCard}>添加卡片</Button>
                </div> */}
            </div>
        )
    }
}
export default PuzzleCards;
```

```
// puzzlecards页面model src/model/puzzlecards.js
export default {
    namespace: 'puzzlecards',
    state: {
        cardList: [
            {
                id: 1,
                setup: 'Did you hear about the two silk worms in a race?',
                punchline: 'It ended in a tie',
            },
            {
                id: 2,
                setup: 'What happens to a frog\'s car when it breaks down?',
                punchline: 'It gets toad away',
            },
        ],
        counter: 100
    },
    reducers: {
        addNewCard(state, { payload: newCard }) {
            const newId = state.counter + 1;
            const newCardWithId = {...newCard, id: newId};
            const nextData = state.cardList.concat(newCardWithId);
            return {
                cardList: nextData,
                counter: newId
            }
        }
    }
}
```

<a name="s7VCv"></a>
### 3. 安装chrome插件 `Redux DevTools`
<a name="7RHJU"></a>
### 4. 分析整体数据流程![](https://gw.alipayobjects.com/zos/rmsportal/uhUMfTcXxfskqbreAXth.png#align=left&display=inline&height=1461&originHeight=1461&originWidth=2540&status=done&style=none&width=2540)

<a name="e22f495b"></a>
## 七、模拟数据

<a name="wCSHS"></a>
### 1. puzzlecards请求数据

```
// src/page/PuzzleCards.js
import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';
const mapStateToProps = (state) => ({
    cardList: state[namespace].cardList
});
const mapDispatchToProps = (dispatch) => ({
    addNewCard(newCard) {
        dispatch({
            type: `${namespace}/addNewCard`,
            payload: newCard
        });
    },
    onDidMount() {
        dispatch({
            type: `${namespace}/getInitCards`
        })
    }
})

@connect(mapStateToProps, mapDispatchToProps)
class PuzzleCards extends Component {

    componentDidMount() {
        this.props.onDidMount();
    }

    render() {
        return (
            <div>
                ...
            </div>
        )
    }
}
export default PuzzleCards;
```

```
// src/model/puzzlecards.js
import request from '../util/request'; 
import {message} from 'antd';

export default {
    ...
    effects: {
        *getInitCards(_, {call, put}) {
            try {
                const url = '/api/puzzlecards';
                const puzzle = yield call(request, url);
                yield put({
                    type: 'addNewCard',
                    payload: puzzle
                });
            }  catch (e) {
                message.error('数据获取失败'); // 打印错误信息
            }
        },
    }
    ...
}
```

```
// src/util/request.js
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  
  /**
   * Requests a URL, returning a promise.
   *
   * @param  {string} url       The URL we want to request
   * @param  {object} [options] The options we want to pass to "fetch"
   * @return {object}           An object containing either "data" or "err"
   */
  export default async function request(url, options) {
    const response = await fetch(url, options);
    checkStatus(response);
    return await response.json();
  }
```

<a name="3D2Ht"></a>
### 2. 模拟服务端数据（mock）

```
// mock/puzzlecards.js
const random_puzzlecards = [
    {
      setup: 'What is the object oriented way to get wealthy ?',
        punchline: 'Inheritance',
    },
    {
      setup: 'To understand what recursion is...',
      punchline: "You must first understand what recursion is",
    },
    {
      setup: 'What do you call a factory that sells passable products?',
      punchline: 'A satisfactory',
    },
];
  
let random_puzzlecards_call_count = 0;
  
export default {
    'get /api/puzzlecards': function (req, res) {
      const responseObj = random_puzzlecards[random_puzzlecards_call_count % random_puzzlecards.length];
      random_puzzlecards_call_count += 1;
      setTimeout(() => {
        const randomNum = Math.random();
        if(randomNum>0.5) {
          res.json(responseObj);
        }else{
          res.status(500);
          res.json({});
        }
      }, 200);
    },
};
```

<a name="ejAIo"></a>
### 3. [配置代理](https://umijs.org/zh/config/#proxy)

```
// config/config.js
export default {
    ...
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:3000',
            changeOrigin: true
        }
    }
}
```

node模拟后端服务`node server.js`

```
const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/api/puzzlecards'){
        var response = {
            "setup":"this ia a test question",
            "punchline":"this is a test answer"
        };
        res.end(JSON.stringify(response));
    }else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

<a name="25f9dc91"></a>
## 八、打包部署

1. 打包 `cnpm run build`
1. [部署](https://pro.ant.design/docs/deploy-cn): 将dist目录下的静态文件部署到nginx下，并进行线上环境配置即可。
<a name="S22ql"></a>
## 九、代码
  1.[github查看](https://github.com/hwluo12/antd-course)
