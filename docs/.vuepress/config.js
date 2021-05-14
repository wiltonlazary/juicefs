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
        ],
        '@vuepress/back-to-top',
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
                    {
                        title: 'Introduction',
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            ['/en/introduction', 'What is JuiceFS'],
                            ['/en/architecture', 'JuiceFS Technical Architecture'],
                            ['/en/how_juicefs_store_files', 'How JuiceFS store files'],
                            ['/en/how_to_setup_object_storage', 'How to Setup Object Storage'],
                            ['/en/databases_for_metadata', 'Metadata Engines for JuiceFS'],
                        ]
                    },
                    {
                        title: '🚀 Quick Start Guide',
                        path: '/en/quick_start_guide',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                    {
                        title: 'Basic Usage',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            ['/en/juicefs_on_linux', 'Use JuiceFS on Linux'],
                            ['/en/juicefs_on_windows', 'Use JuiceFS on Windows'],
                            ['/en/juicefs_on_macos', 'Use JuiceFS on macOS'],
                            ['/en/juicefs_on_docker', 'Use JuiceFS on Docker'],
                            ['/en/juicefs_on_kubernetes', 'Use JuiceFS on Kubernetes'],
                            ['/en/hadoop_java_sdk', 'Use JuiceFS on Hadoop'],
                            ['/en/s3_gateway', 'JuiceFS enable S3 Gateway'],
                            ['/en/client_compile_and_upgrade', 'JuiceFS client compilation and upgrade'],
                        ]
                    },
                    {
                        title: 'Command Reference',
                        path: '/en/command_reference',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                    {
                        title: 'Advanced Topic',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            ['/en/redis_best_practices', 'Redis best practices'],
                            ['/en/benchmark', 'JuiceFS Benchmark'],
                            ['/en/posix_compatibility', 'POSIX Compatibility'],
                            ['/en/cache_management', 'JuiceFS Cache Management'],
                            ['/en/operations_profiling', 'JuiceFS Operations Profiling'],
                            ['/en/fault_diagnosis_and_analysis', 'JuiceFS Fault Diagnosis and Analysis'],
                            ['/en/fuse_mount_options', 'FUSE Mount Options'],
                            ['/en/sync_accounts_between_multiple_hosts', 'JuiceFS Sync accounts between multiple hosts'],
                            ['/en/comparison_with_others', 'Comparison with others'],
                            ['/en/usage-tracking', 'Usage tracking'],
                        ]
                    },
                    {
                        title: 'Scenarios & Cases',
                        path: '/en/case',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                    {
                        title: 'FAQ',
                        path: '/en/faq',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                    {
                        title: 'Release Notes',
                        path: '/en/release_notes',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                    {
                        title: 'Glossary',
                        path: '/en/release_notes',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
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
                            ['/zh_cn/introduction', 'JuiceFS 是什么？'],
                            ['/zh_cn/architecture', 'JuiceFS 的技术架构'],
                            ['/zh_cn/how_juicefs_store_files', 'JuiceFS 如何存储文件？'],
                            ['/zh_cn/how_to_setup_object_storage', '支持的对象存储'],
                            ['/zh_cn/databases_for_metadata', '支持的元数据存储引擎'],
                        ]
                    },
                    {
                        title: '🚀 快速上手',
                        path: '/zh_cn/quick_start_guide',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                    {
                        title: '基本用法',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            ['/zh_cn/juicefs_on_linux', 'Linux 系统使用 JuiceFS'],
                            ['/zh_cn/juicefs_on_windows', 'Windows 系统使用 JuiceFS'],
                            ['/zh_cn/juicefs_on_macos', 'macOS 系统使用 JuiceFS'],
                            ['/zh_cn/juicefs_on_docker', 'Docker 使用 JuiceFS'],
                            ['/zh_cn/juicefs_on_kubernetes', 'Kubernets 使用 JuiceFS'],
                            ['/zh_cn/hadoop_java_sdk', 'Hadoop 使用 JuiceFS'],
                            ['/zh_cn/s3_gateway', 'JuiceFS 启用 S3 Gateway'],
                            ['/zh_cn/client_compile_and_upgrade', 'JuiceFS 客户端编译和升级'],
                        ]
                    },
                    {
                        title: '命令参考',
                        path: '/zh_cn/command_reference',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                    {
                        title: '进阶主题',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            ['/zh_cn/redis_best_practices', 'Redis 最佳实践'],
                            ['/zh_cn/benchmark', 'JuiceFS 性能测试'],
                            ['/zh_cn/posix_compatibility', 'POSIX 兼容性'],
                            ['/zh_cn/cache_management', 'JuiceFS 缓存管理'],
                            ['/zh_cn/operations_profiling', 'JuiceFS 性能诊断'],
                            ['/zh_cn/fault_diagnosis_and_analysis', 'JuiceFS 故障诊断和分析'],
                            ['/zh_cn/fuse_mount_options', 'FUSE 挂载选项'],
                            ['/zh_cn/sync_accounts_between_multiple_hosts', 'JuiceFS 多主机间同步账户'],
                            ['/en/comparison_with_others', '同类技术对比'],
                            ['/zh_cn/usage-tracking', '用量统计'],
                        ]
                    },
                    {
                        title: '应用场景&案例',
                        path: '/zh_cn/case',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                    {
                        title: '常见问题',
                        path: '/zh_cn/faq',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                    {
                        title: '发行注记',
                        path: '/zh_cn/release_notes',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                    {
                        title: '术语表',
                        path: '/zh_cn/release_notes',
                        collapsable: false,
                        sidebarDepth: 1,
                    },
                ]
            }
        }
    }
}