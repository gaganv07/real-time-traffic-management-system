INSERT INTO users (id, full_name, email, password_hash, role)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'System Administrator', 'admin@traffic.local', '$2b$demo', 'admin'),
  ('00000000-0000-0000-0000-000000000002', 'Traffic Operator', 'operator@traffic.local', '$2b$demo', 'operator');

INSERT INTO cameras (id, name, stream_url, intersection_id, latitude, longitude, direction)
VALUES
  ('10000000-0000-0000-0000-000000000001', 'CBD North Camera', 'rtsp://camera-1', 'INT-001', 28.613900, 77.209000, 'northbound'),
  ('10000000-0000-0000-0000-000000000002', 'Airport Corridor Camera', 'rtsp://camera-2', 'INT-002', 28.556200, 77.100000, 'eastbound');

