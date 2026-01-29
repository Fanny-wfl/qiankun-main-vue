# 微前端架构图

```mermaid
graph TB
    subgraph "主应用 (Main App)"
        Main[qiankun-main-vue<br/>Vue 3 + Vue Router + Pinia]
        Qiankun[Qiankun 框架<br/>registerMicroApps + start]
        Router[Vue Router<br/>/home, /about]
        Container[#child-app<br/>子应用容器]
    end

    subgraph "子应用 1: Vue 应用"
        ChildVue[app-vue<br/>qiankun-child-vue]
        ChildVueTech[Vue 3 + Vue Router + Pinia]
        ChildVueRouter[ /app-vue<br/>/app-vue/about ]
        ChildVueEntry[入口地址<br/>Dev: localhost:8011<br/>Prod: /child/app-vue/]
    end

    subgraph "子应用 2: Pure HTML"
        PureHTML[app-purehtml<br/>纯 HTML 应用]
        PureHTMLRouter[ /app-purehtml ]
        PureHTMLEntry[入口地址<br/>Dev: localhost:8009<br/>Prod: /child/purehtml/]
    end

    Main --> Qiankun
    Qiankun --> Container
    Qiankun -.注册.-> ChildVue
    Qiankun -.注册.-> PureHTML

    Main --> Router
    Router --> Container

    ChildVue --> ChildVueTech
    ChildVue --> ChildVueRouter
    ChildVue --> ChildVueEntry
    ChildVueEntry --> Container

    PureHTML --> PureHTMLRouter
    PureHTML --> PureHTMLEntry
    PureHTMLEntry --> Container

    style Main fill:#42b883,stroke:#35495e,stroke-width:3px,color:#fff
    style Qiankun fill:#1890ff,stroke:#0050b3,stroke-width:2px,color:#fff
    style ChildVue fill:#4fc08d,stroke:#2c3e50,stroke-width:2px,color:#fff
    style PureHTML fill:#f39c12,stroke:#d68910,stroke-width:2px,color:#fff
    style Container fill:#e74c3c,stroke:#c0392b,stroke-width:2px,color:#fff
```

## 架构说明

### 主应用 (qiankun-main-vue)

- **技术栈**: Vue 3 + Vue Router + Pinia + Qiankun
- **职责**:
  - 注册和管理子应用
  - 提供统一的导航和布局
  - 管理子应用的生命周期
- **路由**:
  - `/` - 首页
  - `/about` - 关于页

### 子应用 1: app-vue (qiankun-child-vue)

- **技术栈**: Vue 3 + Vue Router + Pinia
- **路由**:
  - `/app-vue` - 子应用首页
  - `/app-vue/about` - 子应用关于页
- **入口地址**:
  - 开发环境: `http://localhost:8011/`
  - 生产环境: `/child/app-vue/`

### 子应用 2: app-purehtml

- **类型**: 纯 HTML 应用
- **路由**: `/app-purehtml`
- **入口地址**:
  - 开发环境: `http://localhost:8009/`
  - 生产环境: `/child/purehtml/`
- **注意**: 仅在生产环境注册

### 关键特性

- ✅ 样式隔离 (`experimentalStyleIsolation: true`)
- ✅ 沙箱隔离
- ✅ 独立开发和部署
- ✅ 路由集成
- ✅ 生命周期管理
