const logs = [
    {
      metadata: { parentResourceId: 'sample_metadata.parentResourceId' },
      _id: '655b7145f500c4e89c9e2273',
      message: 'sample_message',
      resourceId: 'sample_resourceId',
      timestamp: '1998-07-13T00:00:00.000Z',
      traceId: 'sample_traceId',
      spanId: 'sample_spanId',
      commit: 'sample_commit',
      __v: 0
    },
      {
      metadata: { parentResourceId: 'sample_metadata.parentResourceId' },
      _id: '655b7145f500c4e89c9e2273',
      message: 'sample_message',
      resourceId: 'sample_resourceId',
      timestamp: '1998-07-13T00:00:00.000Z',
      traceId: 'sample_traceId',
      spanId: 'sample_spanId',
      commit: 'sample_commit',
      __v: 0
    },
      {
      metadata: { parentResourceId: 'sample_metadata.parentResourceId' },
      _id: '655b7145f500c4e89c9e2273',
      message: 'sample_message',
      resourceId: 'sample_resourceId',
      timestamp: '1998-07-13T00:00:00.000Z',
      traceId: 'sample_traceId',
      spanId: 'sample_spanId',
      commit: 'sample_commit',
      __v: 0
    },
    // ... other logs
  ];
  
  const template = {
    level: 11,
    message: 'sample_message',
    resourceId: '',
    timestamp: '',
    traceId: '',
    spanId: '',
    commit: '',
    id: 1
  };
  
  const filteredLogs = logs.map(log => {
    const filteredLog = {};
    for (const key in template) {
      if (template.hasOwnProperty(key) && template[key] === log[key]) {
        filteredLog[key] = log[key];
        filteredLog['id']= log['_id'];
      }
    }
    return filteredLog;
  });
  
  console.log(filteredLogs);