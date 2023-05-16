import React from "react";
import Layout from "../components/Layout";
import AddForm from "../components/AddForm";

function CreatePage() {
  return (
    <Layout>
      <div className="container max-w-xl mx-auto">
        <AddForm />
      </div>
    </Layout>
  );
}

export default CreatePage;
