"use client";
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function Home() {

  return (
    <main className="">
      <div className="en_tete bg-sky-900">
        <Header />
      </div>
      <Dashboard />
    </main>
  );
}
