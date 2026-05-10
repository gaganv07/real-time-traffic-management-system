CREATE TYPE user_role AS ENUM ('admin', 'operator', 'supervisor', 'analyst', 'emergency');
CREATE TYPE signal_status AS ENUM ('active', 'maintenance', 'offline');
CREATE TYPE incident_type AS ENUM ('accident', 'breakdown', 'violation', 'road_blockage');
CREATE TYPE incident_status AS ENUM ('open', 'investigating', 'resolved');

CREATE TABLE users (
  id UUID PRIMARY KEY,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role user_role NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  last_login_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE cameras (
  id UUID PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  stream_url TEXT NOT NULL,
  intersection_id VARCHAR(40) NOT NULL,
  latitude NUMERIC(9, 6) NOT NULL,
  longitude NUMERIC(9, 6) NOT NULL,
  direction VARCHAR(40) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE traffic_signals (
  id UUID PRIMARY KEY,
  intersection_id VARCHAR(40) UNIQUE NOT NULL,
  status signal_status NOT NULL DEFAULT 'active',
  adaptive_mode BOOLEAN NOT NULL DEFAULT TRUE,
  green_duration_seconds INTEGER NOT NULL,
  amber_duration_seconds INTEGER NOT NULL,
  red_duration_seconds INTEGER NOT NULL,
  emergency_override BOOLEAN NOT NULL DEFAULT FALSE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE traffic_logs (
  id BIGSERIAL PRIMARY KEY,
  intersection_id VARCHAR(40) NOT NULL,
  camera_id UUID REFERENCES cameras(id),
  vehicle_count INTEGER NOT NULL,
  average_speed_kph NUMERIC(6, 2) NOT NULL,
  lane_occupancy NUMERIC(4, 2) NOT NULL,
  density_score NUMERIC(4, 3) NOT NULL,
  congestion_level VARCHAR(20) NOT NULL,
  captured_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_traffic_logs_intersection_captured_at ON traffic_logs (intersection_id, captured_at DESC);

CREATE TABLE incidents (
  id UUID PRIMARY KEY,
  incident_type incident_type NOT NULL,
  incident_status incident_status NOT NULL DEFAULT 'open',
  severity VARCHAR(20) NOT NULL,
  intersection_id VARCHAR(40),
  latitude NUMERIC(9, 6) NOT NULL,
  longitude NUMERIC(9, 6) NOT NULL,
  description TEXT,
  detected_by VARCHAR(50) NOT NULL,
  detected_at TIMESTAMPTZ NOT NULL,
  resolved_at TIMESTAMPTZ
);

CREATE TABLE emergency_vehicles (
  id UUID PRIMARY KEY,
  vehicle_type VARCHAR(40) NOT NULL,
  registration_number VARCHAR(40) UNIQUE NOT NULL,
  current_latitude NUMERIC(9, 6),
  current_longitude NUMERIC(9, 6),
  status VARCHAR(30) NOT NULL,
  assigned_route JSONB,
  priority_level INTEGER NOT NULL DEFAULT 1,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE analytics_snapshots (
  id BIGSERIAL PRIMARY KEY,
  metric_name VARCHAR(60) NOT NULL,
  metric_value NUMERIC(12, 3) NOT NULL,
  aggregation_window VARCHAR(20) NOT NULL,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE notifications (
  id UUID PRIMARY KEY,
  channel VARCHAR(20) NOT NULL,
  recipient VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  payload JSONB NOT NULL,
  status VARCHAR(20) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  delivered_at TIMESTAMPTZ
);

