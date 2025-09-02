import { apiReqs } from "@/api/server";
import Loading from "@/app/components/loading";
import { Card } from "antd";
import Link from "next/link";
import { Suspense } from "react";
import styles from "./serverList.module.scss";
type ItemType = {
  id: number;
  title: string;
};

export default async function ServerList() {
  const List = async () => {
    const response = await apiReqs.getArticleList();

    if (response.success) {
      return response.data.list.map((item: ItemType, index: number) => {
        return (
          <div className={styles["item-con"]} key={index}>
            <div className={styles["col-id"]}>{item.id}</div>
            <div className={styles["col-title"]}>
              <Link href={{ pathname: "/detail/" + item.id }}>
              {item.title}
              </Link>
            </div>
          </div>
        );
      });
    }
    return response.message
  };

  return (
    <Card className={styles['M-serverList']}>
      <Suspense fallback={<Loading/>}>
        <List/>
      </Suspense>
    </Card>
  )
}
