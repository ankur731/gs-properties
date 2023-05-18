import React from "react";
import Layout from "../components/Layout";
import AddForm from "../components/AddForm";
import Login from "../components/Login";
import { useState } from "react";

function CreatePage() {

const [token, setToken] = useState();

if(!token) {
  return <Login setToken={setToken} />
}

  return (
    <Layout>
      <div className="container max-w-xl mx-auto">
        <AddForm />
      </div>
    </Layout>
  );
}

export default CreatePage;
