import { apiReqs } from "@/api/server";
import Loading from "@/app/components/loading";
import { Button, Card, Descriptions, DescriptionsProps } from "antd";
import Link from "next/link";
import { Suspense } from "react";

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const ArticleDetail = async () => {
    const response = await apiReqs.getArticleDetail({ id });

    if (response.success) {
      const items: DescriptionsProps["items"] = [
        { key: "title", label: "文章标题", children: response.data.title },
        { key: "pubDate", label: "发布时间", children: response.data.pubDate },
        { key: "content", label: "文章内容", children: response.data.content },
      ];
      return (
        <Descriptions title="文章详情" column={1} bordered items={items} />
      );
    }

    return response.message;
  };

  return (
    <Card className="M-detail">
       <div style={{ marginBottom: 20 }}>
         <Link href={{ pathname: "/home" }}>
          <Button type="primary">返回首页</Button>
        </Link>
      </div>
      <Suspense fallback={<Loading />}>
        <ArticleDetail />
      </Suspense>
    </Card>
  );
}
