import { HashRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/main/MainLayout";

import DashboardPage from "../features/dashboard/DashboardPage";
import SantriPage from "../features/santri/SantriPage";
import SettingsPage from "../features/settings/SettingsPage";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/santri" element={<SantriPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}