import React, { useState, useEffect } from "react";
import leadsData from "./data/leads.json";
import StatusBadge from "./StatusBadge.jsx";

function LeadsTable() {
  const [search, setSearch] = useState("");
  const [filteredLeads, setFilteredLeads] = useState(leadsData);

  useEffect(() => {
    const filter = leadsData.filter(
      (lead) =>
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredLeads(filter);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by email or name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Source</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeads.map((lead, index) => (
            <tr key={index}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>
                <StatusBadge status={lead.status} />
              </td>
              <td>{lead.source}</td>
              <td>{lead.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadsTable;
