---
title: Performance Benchmark
sidebar_position: 1
slug: .
description: This article describes benchmarking the file system using FIO, mdtest, and the bench command that comes with JuiceFS.
---

Redis is used as Metadata Engine in this benchmark. Under this test condition, JuiceFS performs 10x better than [Amazon EFS](https://aws.amazon.com/efs) and [S3FS](https://github.com/s3fs-fuse/s3fs-fuse).

## Basic benchmark

JuiceFS provides a subcommand `bench` to run a few basic benchmarks to evaluate how it works in your environment:

![JuiceFS Bench](../images/juicefs-bench.png)

## Throughput

Performed sequential read/write benchmarks on JuiceFS, [EFS](https://aws.amazon.com/efs) and [S3FS](https://github.com/s3fs-fuse/s3fs-fuse) by [fio](https://github.com/axboe/fio). Here is the result:

[![Sequential Read Write Benchmark](../images/sequential-read-write-benchmark.svg)](../images/sequential-read-write-benchmark.svg)

It shows JuiceFS can provide 10X more throughput than the other two. Read [more details](fio.md).

## Metadata IOPS

Performed a simple [mdtest](https://github.com/hpc/ior) benchmark on JuiceFS, [EFS](https://aws.amazon.com/efs) and [S3FS](https://github.com/s3fs-fuse/s3fs-fuse) by [mdtest](https://github.com/hpc/ior). Here is the result:

[![Metadata Benchmark](../images/metadata-benchmark.svg)](../images/metadata-benchmark.svg)

It shows JuiceFS can provide significantly more metadata IOPS than the other two. Read [more details](mdtest.md).

## Analyze performance

There is a virtual file called `.accesslog` in the root of JuiceFS to show all the operations and the time they takes, for example:

```
$ cat /jfs/.accesslog
2021.01.15 08:26:11.003330 [uid:0,gid:0,pid:4403] write (17669,8666,4993160): OK <0.000010>
2021.01.15 08:26:11.003473 [uid:0,gid:0,pid:4403] write (17675,198,997439): OK <0.000014>
2021.01.15 08:26:11.003616 [uid:0,gid:0,pid:4403] write (17666,390,951582): OK <0.000006>
```

The last number in each line is the time (in seconds) the current operation takes. You can use this directly to debug and analyze performance issues, or try `./juicefs profile /jfs` to monitor real time statistics. Please run `./juicefs profile -h` or refer [here](../benchmark/operations_profiling.md) to learn more about this subcommand.
