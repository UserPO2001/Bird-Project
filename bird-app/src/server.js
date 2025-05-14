import express from 'express';
import cors from 'cors';
import { 
  getBirdGroups, 
  getBirdsByGroup, 
  getBirdData, 
  getBirdByName,
  getGroupNameById,
  getBirdsByGroupName
} from './database.js';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/bird-groups', (req, res) => {
  try {
    const groups = getBirdGroups();
    res.json(groups);
  } catch (error) {
    console.error('Error fetching bird groups:', error);
    res.status(500).json({ error: 'Failed to fetch bird groups' });
  }
});

app.get('/api/birds/group/:groupId', (req, res) => {
  try {
    const { groupId } = req.params;
    const birds = getBirdsByGroup(groupId);
    res.json(birds);
  } catch (error) {
    console.error('Error fetching birds by group:', error);
    res.status(500).json({ error: 'Failed to fetch birds by group' });
  }
});

app.get('/api/birds/group-name/:groupName', (req, res) => {
  try {
    const { groupName } = req.params;
    const birds = getBirdsByGroupName(groupName);
    res.json(birds);
  } catch (error) {
    console.error('Error fetching birds by group name:', error);
    res.status(500).json({ error: 'Failed to fetch birds by group name' });
  }
});

app.get('/api/bird/:id', (req, res) => {
  try {
    const { id } = req.params;
    const birdData = getBirdData(id);
    res.json(birdData);
  } catch (error) {
    console.error('Error fetching bird data:', error);
    res.status(500).json({ error: 'Failed to fetch bird data' });
  }
});

app.get('/api/bird/name/:name', (req, res) => {
  try {
    const { name } = req.params;
    const birdData = getBirdByName(name);
    
    if (!birdData) {
      return res.status(404).json({ error: 'Bird not found' });
    }
    
    res.json(birdData);
  } catch (error) {
    console.error('Error fetching bird data by name:', error);
    res.status(500).json({ error: 'Failed to fetch bird data by name' });
  }
});

app.get('/api/group/:id/name', (req, res) => {
  try {
    const { id } = req.params;
    const groupName = getGroupNameById(id);
    
    if (!groupName) {
      return res.status(404).json({ error: 'Group not found' });
    }
    
    res.json({ name: groupName });
  } catch (error) {
    console.error('Error fetching group name:', error);
    res.status(500).json({ error: 'Failed to fetch group name' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app; 