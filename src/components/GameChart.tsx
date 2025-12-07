import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { PlayerStats, ChartType } from '../types/game';

interface GameChartProps {
  data: PlayerStats[];
  chartType: ChartType;
  gameName: string;
}

const COLORS = ['#9333ea', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'];

export default function GameChart({ data, chartType }: GameChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
        Không có dữ liệu thống kê
      </div>
    );
  }

  const formatNumber = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="font-bold text-gray-900 dark:text-white mb-2">Năm {label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: <span className="font-semibold">{formatNumber(entry.value)}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Biểu đồ cột chồng (mặc định)
  if (chartType === 'bar') {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis
            dataKey="year"
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
            tickFormatter={formatNumber}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="players" name="Tổng người chơi" fill="#9333ea" stackId="a" />
          <Bar dataKey="activeUsers" name="Người chơi hoạt động" fill="#ec4899" stackId="a" />
          <Bar dataKey="newPlayers" name="Người chơi mới" fill="#3b82f6" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  // Biểu đồ đường
  if (chartType === 'line') {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis
            dataKey="year"
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
            tickFormatter={formatNumber}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="players"
            name="Tổng người chơi"
            stroke="#9333ea"
            strokeWidth={3}
            dot={{ fill: '#9333ea', r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="activeUsers"
            name="Người chơi hoạt động"
            stroke="#ec4899"
            strokeWidth={3}
            dot={{ fill: '#ec4899', r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="newPlayers"
            name="Người chơi mới"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: '#3b82f6', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  // Biểu đồ vùng
  if (chartType === 'area') {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis
            dataKey="year"
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
            tickFormatter={formatNumber}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="players"
            name="Tổng người chơi"
            stackId="1"
            stroke="#9333ea"
            fill="#9333ea"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="activeUsers"
            name="Người chơi hoạt động"
            stackId="1"
            stroke="#ec4899"
            fill="#ec4899"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="newPlayers"
            name="Người chơi mới"
            stackId="1"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  // Biểu đồ tròn (hiển thị tổng của năm gần nhất)
  if (chartType === 'pie') {
    const latestYear = data[data.length - 1];
    const pieData = [
      { name: 'Tổng người chơi', value: latestYear.players },
      { name: 'Người chơi hoạt động', value: latestYear.activeUsers },
      { name: 'Người chơi mới', value: latestYear.newPlayers },
    ];

    return (
      <div>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
          Thống kê năm {latestYear.year}
        </p>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={(entry: { name: string; percent: number }) => `${entry.name}: ${(entry.percent * 100).toFixed(0)}%`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => formatNumber(value)}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return null;
}
