import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Table from "../components/Table";
import DeleteModal from "../components/DeleteModal";
import axios from "axios";
import PreviewSidebar from "../components/PreviewSidebar";
function HomePage() {
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const [previewOpened, setPreviewOpened] = useState(false);
  const [previewRecord, setPreviewRecord] = useState(null);
  const getAllData = async () => {
    setLoading(true);
    const url =
      "https://api.sheety.co/d896a1e2e8994f1f6d971c6d9abfeb9e/gsProperties/data";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.get(url, config);
      const results = await response.data;
      setRecords(results.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  const openPreview = (record)=>{
    console.log("Open preview");
    setPreviewOpened(true);
    setPreviewRecord(record)
  }

  useEffect(() => {
    return async () => {
      await getAllData();
    };
  }, []);


  const tableConfig = {
    headers:["Town","Phase","Block","Plot no","ELCharges"],
    data:records.map(r=>{return {
      ...r,
      town:r.town,
      block:r.block,
      phase:r.phase,
      plotNo:r.plotNo,
      extraLandCharges:r.extraLandCharges
    }})
  };
  if(loading){
    return <h1 className="text-xl">Loading resources</h1>
  }
  return (
    <Layout>
      <DeleteModal/>
      <PreviewSidebar opened={previewOpened} setPreviewOpened={setPreviewOpened} record={previewRecord}/>
      <div className="my-12">
        <Table records={records} config={tableConfig} openPreview={openPreview}/>
      </div>
    </Layout>
  );
}

export default HomePage;
