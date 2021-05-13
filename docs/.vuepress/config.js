module.exports = {
    base: '/',
    title: 'JuiceFS User Manual',
    description: 'JuiceFS is a distributed POSIX file system built on top of Redis and S3.',
    head: [
        ['link', { rel: 'shortcut icon', href: 'https://s.juicefs.com/static/jfs/logo.ico' }],
    ],
    host: '0.0.0.0', // Just for dev
    port: 8080, // Just for dev
    dest: 'dist', // Output directory
    locales: {
        '/': {
            lang: 'en-US',
            title: 'JuiceFS User Manual',
            description: 'JuiceFS is a distributed POSIX file system built on top of Redis and S3.'
        },
        '/zh_cn/': {
            lang: 'zh-CN',
            title: 'JuiceFS 用户手册',
            description: 'JuiceFS 是一款构建在 Redis 和 S3 之上的高性能 POSIX 文件系统，针对云原生环境特别优化设计。'
        }
    },
    markdown: {
        externalLinks: { target: '_blank', rel: 'noopener noreferrer' }
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': '' // UA-00000000-0
            }
        ]
    ],
    themeConfig: {
        logo: 'https://s.juicefs.com/static/jfs/logo.svg',
        repo: 'https://github.com/juicedata/juicefs',
        editLinks: true,
        locales: {
            '/': {
                selectText: '选择语言',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                lastUpdated: 'Last Updated',
                nav: [
                    { text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }
                ],
                sidebar: [
                    '/',
                ]
            },
            '/zh_cn/': {
                selectText: 'Languages',
                label: '简体中文',
                ariaLabel: '简体中文',
                editLinkText: '在 GitHub 上编辑此页面',
                serviceWorker: {
                    updatePopup: {
                        message: "有新内容可用！",
                        buttonText: "刷新"
                    }
                },
                lastUpdated: '最近一次更新',
                nav: [
                    { text: '导航样本', link: '/nested/', ariaLabel: '导航样本' }
                ],
                sidebar: [
                    {
                        title: '介绍',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            ['/zh_cn/introduction', 'JuiceFS 是什么？']
                        ]
                    }
                ]
            }
        }
    }
}