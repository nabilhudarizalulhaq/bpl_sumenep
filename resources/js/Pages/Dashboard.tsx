import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Link } from '@inertiajs/react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface DashboardProps {
  stats: {
    totalUsers: number;
    totalPosts: number;
    totalComments: number;
    visitsToday: number;
    visitsLast7Days: number[];
    latestPosts: { id: number; title: string }[];
    latestComments: { id: number; user: string; comment: string }[];
  };
}

export default function AdminDashboard({ stats }: DashboardProps) {
  const [chartData, setChartData] = useState<any>({ labels: [], datasets: [] });

  useEffect(() => {
    const labels = Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`);
    setChartData({
      labels,
      datasets: [
        {
          label: 'Pengunjung Harian',
          data: stats.visitsLast7Days,
          fill: true,
          backgroundColor: 'rgba(34,197,94,0.2)',
          borderColor: 'rgba(34,197,94,1)',
          tension: 0.3,
        },
      ],
    });
  }, [stats]);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-6 flex-shrink-0">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <Link href="/admin/dashboard" className="block px-4 py-2 rounded hover:bg-green-600 hover:text-white dark:hover:bg-green-500">
            Dashboard
          </Link>
          <Link href="/admin/users" className="block px-4 py-2 rounded hover:bg-green-600 hover:text-white dark:hover:bg-green-500">
            Users
          </Link>
          <Link href="/admin/posts" className="block px-4 py-2 rounded hover:bg-green-600 hover:text-white dark:hover:bg-green-500">
            Posts
          </Link>
          <Link href="/admin/comments" className="block px-4 py-2 rounded hover:bg-green-600 hover:text-white dark:hover:bg-green-500">
            Comments
          </Link>
          <Link href="/admin/settings" className="block px-4 py-2 rounded hover:bg-green-600 hover:text-white dark:hover:bg-green-500">
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 relative z-10">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">Dashboard Admin</h1>

        {/* Statistik Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-300">Total Users</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.totalUsers}</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-300">Total Posts</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.totalPosts}</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-300">Total Comments</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.totalComments}</p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-300">Kunjungan Hari Ini</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.visitsToday}</p>
          </div>
        </div>

        {/* Grafik Pengunjung */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200">Pengunjung 7 Hari Terakhir</h2>
          <div className="mt-4">
            <Line
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: { labels: { color: 'white' } },
                  title: { display: false },
                },
                scales: {
                  x: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } },
                  y: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } },
                },
              }}
            />
          </div>
        </div>

        {/* Daftar Posting & Komentar Terbaru */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Latest Posts */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200">Posting Terbaru</h2>
            <ul className="mt-4 space-y-2">
              {stats.latestPosts.map(post => (
                <li key={post.id}>
                  <Link href={`/admin/posts/${post.id}`} className="text-green-700 dark:text-green-400 hover:underline">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Comments */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-200">Komentar Terbaru</h2>
            <ul className="mt-4 space-y-2">
              {stats.latestComments.map(comment => (
                <li key={comment.id} className="text-gray-800 dark:text-gray-200">
                  <span className="font-bold">{comment.user}:</span> {comment.comment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
